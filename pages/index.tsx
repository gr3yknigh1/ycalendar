import React from 'react';
import Head from 'next/head';
import App from '@/app';

export default function Index() {
  return (
    <>
      <Head>
        <title>YCalendar</title>
      </Head>
      <header>
      </header>
      <main>
        <React.Fragment>
          <App />
        </React.Fragment>
      </main>
      <footer>
        @gr3yknigh1
      </footer>
    </>
  );
}
