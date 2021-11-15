
import Body from './page/Home/Body';
import ContactUs from './page/form/contactUs';
import ReviewMessage from './page/reviewMessage/reviewMessage';
import Error from './page/error/error';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Body/>}/>
        <Route path="/contact-us" index element={<ContactUs/>}/>
        <Route path="/contact-us/message" index element={<ReviewMessage/>}/>
        <Route  path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Body/>
    // </div>
  );
}

export default App;
