import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Project from '../components/Projects/Projects'
import Work from '../components/Work/Work'
import Footer from '../components/Footer/Footer'
export default function Home() {
  return (<>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Head>
            <title>Michael's Portfolio</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta name="description" content="This is My portfolio that I have created with NextJs, Tailwind and Deployed with Vercel. Author: M.Watt"/>
          </Head>
          
          <main  id="about" className="flex-col items-center justify-center w-full flex-1  text-center">
            <Header/>
            <About/>
            <Project/>
            <Work/>
          </main>
        </div>
      <Footer/>
      <script src="https://kit.fontawesome.com/339a1b456b.js"
      crossOrigin="anonymous" defer>
      </script>
      </>
  )
}
