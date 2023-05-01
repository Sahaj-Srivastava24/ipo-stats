import {type NextPage} from "next";
import Head from "next/head";

import {Poppins} from 'next/font/google';
import LandingView from "components/views/landing";
import IPOList from "components/views/ipo_list";
import FAQs from "components/views/faq";

const poppins = Poppins({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${poppins.className} font-[500]`}>
        <LandingView />
        <IPOList />
        <FAQs />
      </div>
    </>
  );
};

export default Home;
