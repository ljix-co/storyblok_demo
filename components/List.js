import { storyblokEditable } from "@storyblok/react";

const List = ({blok}) => {
  return (
    <div className="my-8" {...storyblokEditable(blok)}>
          <ul className="list-inside">
          {blok.list.items?.map((nestedBlok, index) => (
            <li key={index} className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-gray-400 hover:text-amber-400">
            {nestedBlok.text}
            </li>
          ))}
          </ul>
    </div>
  )
}
export default List;
