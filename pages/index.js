import Main from '../pages/Components/Main'
import Head from 'next/head'


export default function Home() {
  return (
    <div >
      <Head>
        <title className=' font-medium text-xl text-gray-300'>Noise | India's No.1 Wearable Watch Brand </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/go noise.png" />
        <script src="https://kit.fontawesome.com/e25c7ec0ac.js" crossorigin="anonymous"></script>
      </Head>

      <main >
       <Main />
      </main>

      
    </div>
  )
}
