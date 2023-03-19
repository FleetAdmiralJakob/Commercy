import { type NextPage } from "next";
import React from "react";
import Layout from "~/components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Home">
        <div className="flex flex-col items-center">
          <h1 className="text-9xl font-bold gradient-text gradient-text-blue">Commercy</h1>
            <p className="text-2xl font-bold">A wonderful E-Commerce website</p>
        </div>
      </Layout>
    </>
  );
};

export default Home;


