import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import {
    UpcomeView, FundView
} from "views/Projects";
const Projects: NextPage = () => {
    return (
        <>
            <SEO title="Projects" description="this is Projects page" />
            <UpcomeView />
            <FundView />
        </>
    );
};

export default Projects;
