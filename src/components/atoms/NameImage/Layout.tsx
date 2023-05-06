import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import Button from "../Button/Button";

const name: string = "fuki";
export const siteTitle: string = "Next.js Blog";

function Layout({ home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="py-4">
        <div className="container mx-auto flex flex-col justify-center items-center px-4">
          <Image
            src="/images/fu.png"
            alt=""
            width={50}
            height={50}
            className="rounded-full flex justify-center"
          />
          <h1 className="text-2xl font-bold text-center">{name}</h1>
        </div>
      </header>
      {!home && (
        <div>
          <Link href="/">
            <Button title="ホームへ戻る" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
