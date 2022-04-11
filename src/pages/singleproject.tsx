import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import {
    HeaderView, GalaxyView, DescriptionView
} from "views/SingleProject";
const SingleProject: NextPage = () => {
    return (
        <>
            <SEO title="SingleProject" description="this is SingleProject page" />
            <HeaderView />
            <GalaxyView />
            {/* <DescriptionView /> */}
        </>
    );
};

export default SingleProject;
