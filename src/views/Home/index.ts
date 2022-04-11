import dynamic from "next/dynamic";

export const HeroView = dynamic(() => import("./HeroView"));
export const UpcomingView = dynamic(() => import("./UpcomingView"));
export const GonearView = dynamic(() => import("./Gonear"));
export const RoadMapView = dynamic(() => import('./RoadMap'), {
    ssr: false
})
export const LearnMoreView = dynamic(() => import("./LearnMore"));
export const FundsView = dynamic(() => import("./Funds"));
