import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import {
  HeroView,
  UpcomingView,
  GonearView,
  RoadMapView,
  LearnMoreView,
  FundsView,
} from "views/Home";
const Home: NextPage = () => {
  return (
    <>
      <SEO title="home" description="this is home page" />
      <HeroView />
      <UpcomingView />
      <GonearView />
      <RoadMapView />
      <LearnMoreView />
      <FundsView />
    </>
  );
};

export default Home;
