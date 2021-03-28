import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ButtonCounter from '../components/test.js'

export default function Home() {
  return (
    <>
          <Head>
            <title> Hello</title>
          </Head>
          <ButtonCounter startNum={9}/>
          <Link href="/otherPage"><a>Text to other page</a></Link>
    </>
  )
}
