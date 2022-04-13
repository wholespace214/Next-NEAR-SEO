import dynamic from "next/dynamic";
export const IDOView = dynamic(() => import("./Council"));
export const EmbedView = dynamic(() => import("./Embed"));
