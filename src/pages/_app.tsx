import "../styles/globals.css";
import type { AppProps } from "next/app";
// layout
import AppLayout from "layout/AppLayout";
import "antd/dist/antd.css";
// ------------------------------------------------

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
