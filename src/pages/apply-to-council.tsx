import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import {
    IDOView, EmbedView
} from "views/ApplyCouncil";
const Applycouncil: NextPage = () => {
    return (
        <>
            <SEO title="Apply for council" description="this is Apply for council page" />
            <IDOView />
            <EmbedView />
        </>
    );
};

export default Applycouncil;
