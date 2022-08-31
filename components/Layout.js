import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="font-sans">
      <Navigation/>
        <div
        className={children.props.blok.body?.find(element => element.component === 'hero-section' && element.layout === 'layout_one')
        ? "mb-8 w-full h-full" : "m-auto mb-32 w-5/6"}
        >
          {children}
        </div>
    </div>
  )
};

export default Layout;
