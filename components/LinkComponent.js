import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const LinkComponent = ({ blok }) => {
  return (
    <div className="column text-center" {...storyblokEditable(blok)}>
    <div className="mt-8 p-4 text-2xl font-bold text-gray-400 hover:text-teal-400 lg:text-2xl">
        <Link href={`/${blok.path.cached_url}` || ''}>
        {blok.text}
        </Link>
      </div>
    </div>
  );
}

export default LinkComponent;
