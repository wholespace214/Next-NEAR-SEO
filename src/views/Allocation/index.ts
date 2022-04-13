import dynamic from "next/dynamic";
export const FairView = dynamic(() => import("./fair"));
export const TierView = dynamic(() => import("./tier"));
