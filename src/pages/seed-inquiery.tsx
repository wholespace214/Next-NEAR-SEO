import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import {
    IDOView, EmbedView
} from "views/Contribution";
const Contribution: NextPage = () => {
    return (
        <>
            <SEO title="Inquire for
contribution" description="this is Inquire for
contribution page" />
            <IDOView />
            <EmbedView />
        </>
    );
};

export default Contribution;
