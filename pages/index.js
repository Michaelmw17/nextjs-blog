import Head from 'next/head';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Project from '../components/Projects/Projects';
import Work from '../components/Work/Work';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-0">
        <Head>
          <title>Michael's Portfolio</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
            rel="stylesheet"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="This is My portfolio that I have created with NextJs, Tailwind and Deployed with Vercel. Author: M.Watt"
          />
        </Head>

        <main className="flex-col items-center justify-center w-full flex-1  text-center">
          <div className="container-Hero">
            <Header />
            <Hero />
          </div>
          <div className="container">
            <div className="shape-blob"></div>
            <div className="shape-blob one"></div>
            <div className="shape-blob two"></div>
            <div className="shape-blob three"></div>
            <div className="shape-blob four"></div>
            <div className="shape-blob five"></div>
            <About />
            <Work />
            <Project />
          </div>
        </main>
      </div>
      {/* <Footer /> */}
      <script
        src="https://kit.fontawesome.com/339a1b456b.js"
        crossOrigin="anonymous"
        defer
      ></script>
    </>
  );
}
