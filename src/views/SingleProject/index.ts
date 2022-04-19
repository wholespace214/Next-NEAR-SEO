import dynamic from "next/dynamic";
export const HeaderView = dynamic(() => import("./singleheader"));
export const GalaxyView = dynamic(() => import("./galaxy"));
export const DescriptionView = dynamic(() => import("./description"));
