import '../styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import HeroSection from "../components/HeroSection";
import LinkComponent from "../components/LinkComponent";
import List from "../components/List";
import PresentationSection from "../components/PresentationSection";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  'hero-section': HeroSection,
  link: LinkComponent,
  list: List,
  'presentation-section': PresentationSection
};

storyblokInit({
  accessToken: "U0uHyM7gLLM2vREg1Ju0cAtt",
  use: [apiPlugin],
  components
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
