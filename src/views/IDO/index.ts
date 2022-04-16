import dynamic from "next/dynamic";
export const IDOView = dynamic(() => import("./IDO"));
export const EmbedView = dynamic(() => import("./Embed"));
