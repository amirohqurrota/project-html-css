import React from 'react'

export default function ItemNews(props) {
    console.log(props.news)
    // const imageurl=props.news.image
    return (
        <div className="p-10">
            <div className="max-w-sm overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <h3>{props.news.title}</h3>
                    <p>{props.news.description}</p>
                    {/* <p>{imageurl}</p> */}
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> <a href={props.news.url} target="_blank" rel="noopener noreferrer">Link</a>  </span>
                </div>
            </div>
        </div>

    )
}