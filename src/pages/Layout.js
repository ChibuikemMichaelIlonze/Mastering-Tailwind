import Head from "next/head";
import { useState } from "react";

import React from "react";
import Header from "@/pages/sections/header";

const Layout = ({ children, mode, setMode }) => {
  return (
    <>
      <Head>
        <title>BM Stores</title>
        <meta
          name="description"
          content="The Largest Food Store in that Area"
        />
        <link
          rel="icon"
          href={`${mode ? "/favicon-orange.ico" : "/favicon-green.ico"}`}
          type="image/x-icon"
        />
      </Head>

      <div
        className={`${
          mode ? "bg-black text-white" : "bg-white text-black"
        } flex justify-between  px-20 flex-col  h-full sm:h-screen w-screen sm:px-24 lg:px-20 py-9 relative ${
          mode
            ? " selection:bg-green-500 selection:text-white"
            : "selection:bg-yellow-400 selection:text-zinc-800"
        } `}
      >
        <Header setMode={setMode} mode={mode} />
        <main >{children}</main>
      </div>
    </>
  );
};

export default Layout;
