import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import {
    IDOView, EmbedView
} from "views/IDO";
const IDO: NextPage = () => {
    return (
        <>
            <SEO title="IDO" description="this is IDO page" />
            <IDOView />
            <EmbedView />
        </>
    );
};

export default IDO;
