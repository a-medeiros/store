import React from 'react';
import Head from 'next/head';
import Home from '../templates/home';

export default function Index() {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
      <Home />
    </>
  );
}
