import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import {
    MeetView, TopView
} from "views/Council";
const Council: NextPage = () => {
    return (
        <>
            <SEO title="Council" description="this is Council page" />
            <TopView />
            <MeetView />
        </>
    );
};

export default Council;
