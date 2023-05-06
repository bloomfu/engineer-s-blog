import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/atoms/NameImage/Layout";
import Profile from "@/components/atoms/Profile/Profile";
import { getSortedPostsData } from "../lib/post";
import Index from "@/components/templates";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(); //id,title, data,thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  // console.log(allPostsData);
  return (
    <>
      <Index>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {allPostsData.map(({ id, date, title, thumbnail }) => (
            <article key={id} className="flex flex-col items-center">
              <Link href={`/posts/${id}`} legacyBehavior>
                <a className="mr-4 block w-full h-full sm:w-full sm:h-full md:w-56 md:h-48 lg:w-72 lg:h-56 xl:w-80 xl:h-64 overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-none transform hover:translate-x-4 hover:translate-y-5 cursor-pointer">
                  <Image
                    src={`${thumbnail}`}
                    alt=""
                    width={1000}
                    height={1000}
                    className="object-cover"
                    priority
                  />
                </a>
              </Link>
              <Link href={`/posts/${id}`} legacyBehavior>
                <a className="text-xl font-bold mb-2 hover:underline boldText">
                  {title}
                </a>
              </Link>
              <p className="text-gray-500 text-sm mb-2">{date}</p>
            </article>
          ))}
          ;
        </div>
      </Index>
    </>
  );
}
