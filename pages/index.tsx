import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>5E Monster Mash</title>
        <link rel="icon" type="image/svg+xml" href="/swords.svg" />
      </Head>
      <div className="w-full h-full flex flex-col">
        <main className="flex-grow p-4">
          <h1 className="text-4xl font-serif">
            It was a mash... A 5e Monster sMash!
          </h1>
        </main>

        <footer className="flex-grow-0 p-4">
          <hr className="w-full pb-4" />
          <div className="flex flex-row items-center">
            <a className="mr-2" href="https://github.com/redmega/monster-mash">
              <img src="https://img.shields.io/badge/Contribute on Github-grey?logo=github&style=flat-square" />
            </a>
            <a
              className="flex flex-row items-center mr-2"
              style={{ backgroundColor: "#555" }}
              href="https://github.com/bagelbits/5e-srd-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                // className="bg-gray-500"
                style={{ height: 14, width: 14, marginLeft: 5 }}
                src="https://www.dnd5eapi.co/public/favicon.ico"
              />
              <img src="https://img.shields.io/badge/Powered By-D&D 5e API-d81921?style=flat-square" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
