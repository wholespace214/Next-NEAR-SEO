import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import {
    WorkView, PositionView, CultureView, EmbedView
} from "views/Careers";
const Careers: NextPage = () => {
    return (
        <>
            <SEO title="Careers" description="this is Careers page" />
            <WorkView />
            <CultureView />
            <PositionView />
            <EmbedView />
        </>
    );
};

export default Careers;
