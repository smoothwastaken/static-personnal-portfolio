import Head from 'next/head'
import Image from "next/image";

const mainColor = "red";

export default function Home() {
  return (
    <>
      <Head>
        <title>cleeryy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-gray-900 p-28">
        <div className="p-10 border-2 border-gray-700 bg-gray-800 rounded-2xl text-white">
          <h1 className="text-6xl font-black">cleeryy</h1>
          <br />
          <p>
            <span className={"text-red-500 font-bold"}>{"> "}</span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo fugit
            molestias natus dolorem dolores! Inventore aperiam quaerat, mollitia
            est architecto, facilis obcaecati nostrum magnam quasi pariatur
            fugit omnis aut reiciendis.
          </p>
        </div>
      </div>
    </>
  );
}
