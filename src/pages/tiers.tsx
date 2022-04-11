import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import {
    FairView, TierView
} from "views/Allocation";
const Allocation: NextPage = () => {
    return (
        <>
            <SEO title="Allocation" description=" this is Allocationpage" />
            <FairView />
            <TierView />
        </>
    );
};

export default Allocation;
