import dynamic from "next/dynamic";
export const TopView = dynamic(() => import("./Top"));
export const MeetView = dynamic(() => import("./Meet"));
