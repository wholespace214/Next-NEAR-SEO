import dynamic from "next/dynamic";
export const WorkView = dynamic(() => import("./work"));
export const CultureView = dynamic(() => import("./culture"));
export const PositionView = dynamic(() => import("./position"));
export const EmbedView = dynamic(() => import("./Embed"));
