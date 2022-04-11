import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import {
    PionView, AdvisorsView, InvestorsView
} from "views/About";
const About: NextPage = () => {
    return (
        <>
            <SEO title="About" description="this is About page" />
            <PionView />
            <AdvisorsView />
            <InvestorsView />
        </>
    );
};

export default About;
