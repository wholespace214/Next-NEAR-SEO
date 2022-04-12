import dynamic from "next/dynamic";
export const PionView = dynamic(() => import("./Pion"));
export const AdvisorsView = dynamic(() => import("./Advisors"));
export const InvestorsView = dynamic(() => import("./Investors"));
