import { Route, Routes, useLocation, useResolvedPath } from "react-router-dom";
import Blog from "./components/blog/blogcomponent";
import Contacts from "./components/contacts/contactComponent";
import Footer from "./components/footer/footerComponent";
import Header from "./components/header/headerComponent";
import Main from "./components/main/mainComponent";
import OrderComponent from "./components/order/orderComponent";
import Regulations from "./components/regulations/regulationscomponent";

function App() {
  let location = useLocation()
  return (
    <>
      <div className={location.pathname === '/' || location === ' ' ? 'wrapper' : 'blog_wrp'}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/order" element={<OrderComponent />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
