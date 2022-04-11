import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import {
    NotView
} from "views/NotFound";
const NotFound: NextPage = () => {
    return (
        <>
            <SEO title="404" description="this is 404 page" />
            <NotView />
        </>
    );
};

export default NotFound;
