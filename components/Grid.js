import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import {useRouter} from 'next/router';

const Grid = ({ blok }) => {
const router = useRouter();

  return (
    <div className={`grid grid-cols-5 my-auto gap-x-5 ${router.pathname === '/' && 'w-5/6 mx-auto'}`} {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
