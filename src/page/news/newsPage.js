import React, { useEffect, useState } from 'react'
import ItemNews from '../../component/itemNews'
import axios from 'axios';

export default function NewsPage() {
    const [news, setNews] = useState([])

    // useEffect(() => {
    //     fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-10-15&sortBy=publishedAt&apiKey=d9601c590a1c4c1bb36cc321d487d0a9`, {
    //         mode: 'cors'
    //     })
    //         .then(response => response.json())
    //         .then(json => {
    //             setNews(json.data.articles)
    //         })
    // }, [])
    useEffect(async () => {
        const result = await axios(
          'https://newsapi.org/v2/everything?q=tesla&from=2021-10-15&sortBy=publishedAt&apiKey=d9601c590a1c4c1bb36cc321d487d0a9',
        );
        setNews(result.data.articles);
    });
    


    return (
        <div className="pt-20">
            <h1 className="text-center text-7xl font-bold mt-8 text-blue-600">List News</h1>
            { news &&
            <div>
                {news.map((item) => <ItemNews news={item} />)}
            </div>
            }
        </div>
    )
}