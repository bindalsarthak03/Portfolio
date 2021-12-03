import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header.jsx'
import Nav from '../components/Nav.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    AOS.init({
      
    });
    window.addEventListener("load", AOS.refresh);
  }, []);
  return (

    <div className={styles.container}>
     
      <Head>
        <title>Sarthak Bindal</title>

        <meta
          name="description"
          content="Hello I am Sarthak Bindal, Sophomore from IIIT Kottayam, who likes to code. Currently a python based full stack Web developer who also has a hand in JavaScript based stacks"
        />
        <meta
          name="keywords"
          content="Web Developer,Python,Django,JavaScript,Sarthak Bindal"
        />
        <meta name="author" content="Sarthak Bindal" />
        <meta property="og:title" content="Sarthak Bindal" />
        <meta
          property="og:description"
          content="Hello I am Sarthak Bindal, Sophomore from IIIT Kottayam, who likes to code. Currently a python based full stack Web developer who also has a hand in JavaScript based stacks"
        />
        <meta
          property="og:url"
          content="https://www.shashankkumarsrivastava.tech/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="2gE6r2Lha6MfqjriPS7jcocTxzrkQCRyjvnlKSqhhyw"
        />
        <meta property="og:site_name" content="Sarthak Bindal" />
        <meta property="og:locale" content="en_US" />
        <meta itemProp="name" content="Sarthak Bindal" />
        <meta
          itemProp="description"
          content="Hello I am Sarthak Bindal, Sophomore from IIIT Kottayam, who likes to code. Currently a python based full stack Web developer who also has a hand in JavaScript based stacks"
        />
        <link rel="icon" href="/favicon.png" />
        </Head>
    <Nav/>
    <Header/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}
