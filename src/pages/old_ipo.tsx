import { type NextPage } from "next";
import Head from "next/head";

import { Poppins } from "next/font/google";
// import IPOView from "components/views/ipo_details";

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>checkIPO</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${poppins.className} bg-text bg-backgroundLight font-[500]`}
      >
        {/* <IPOView />
        <Footer /> */}
      </div>
    </>
  );
};

export default Home;
