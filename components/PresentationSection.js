import { storyblokEditable } from "@storyblok/react";
import List from "../components/List";

const PresentationSection = ({blok}) => {
  return (
    <div className="" {...storyblokEditable(blok)}>
        {blok.layout === "layout_1" && (
          <div className="my-32 flex md:flex-row flex-col items-start">
          <div className="w-1/2">
            <img src={blok.image}  className="w-full rounded-3xl"/>
          </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold leading-none tracking-tighter text-teal-400">
              {blok.title}
              </h1>
              <p className="leading-relaxed text-indigo-300">{blok.subtitle}</p>
              <List blok={blok}/>
            </div>
          </div>
        )}
        {blok.layout === "layout_2" && (
          <div className="my-32 flex md:flex-row flex-col items-start">
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold leading-none tracking-tighter text-teal-400">
              {blok.title}
              </h1>
              <p className="leading-relaxed text-indigo-300">{blok.subtitle}</p>
              <List blok={blok}/>
            </div>
            <div className="w-1/2 rounded-md">
              <img src={blok.image}  className="w-full rounded-3xl"/>
            </div>
          </div>
        )}
    </div>
  )
}
export default PresentationSection;
