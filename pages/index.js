import Head from "next/head"
import styles from "../styles/Home.module.css"
import {useStoryblokState, getStoryblokApi, StoryblokComponent } from "@storyblok/react"
import Layout from '../components/Layout'

export default function Home(props) {
  const story = useStoryblokState(props.story, {}, props.preview);
  return (
    <div className={styles.container}>
      <Head>
        <title>Headless CMS presentation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <StoryblokComponent blok={story.content} />
       </Layout>
    </div>
  )
}

export async function getStaticProps(context) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the published version
  let sbParams = {
    version: "published",
  };

  if (context.preview) {
    sbParams.version = "draft";
  }

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: context.preview || false,
    },
    revalidate: 300, // revalidate every hour
  };
}
