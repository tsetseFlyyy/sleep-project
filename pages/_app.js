import { GetServerSideProps } from "next";
import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

function App({ Component, pageProps }) {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered) {
    return <Component {...pageProps} />;
  }
  return null;
}

export default appWithTranslation(App);

export const getServerSideProps = async (context) => {
  return {
    props: {
      cookies: context.req.cookies ?? "",
    },
  };
};
