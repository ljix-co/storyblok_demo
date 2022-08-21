import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div>
    <Navigation/>
      <div className="m-auto w-5/6">
        {children}
      </div>
    <Footer />
  </div>
);

export default Layout;
