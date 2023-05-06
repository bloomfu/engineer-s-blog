import Date from "@/components/atoms/Date";
import Layout from "@/components/atoms/NameImage/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";
import Head from "next/head";

//動的ルーティング設定のための関数。pathsがルーティング設定になっている(開発環境なら毎回リクエスト時に実行される、本番環境ならビルド時だけ実行される。)。
//idがとりうる値のリストを返す
export async function getStaticPaths() {
  //ブログ投稿データのファイル名(id)を取得。
  const paths = getAllPostIds();

  return {
    paths, //どのパスが事前にレンダリングされるのか決める。
    fallback: false, //あとで説明。(falseにすると、上のpathsに含まれてないあらゆるパスはアクセスすると404ページになる。)
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  console.log(postData);
  return {
    props: {
      postData,
    },
  };
}

{
  /* 以下レイアウトに関し、getStaticPropsを使用しているためコンポーネントは使わず直書きしている */
}
function Post({ postData }) {
  return (
    <>
      <Layout />
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-2xl font-extrabold leading-6 tracking-tight text-gray-900 my-4">
          {postData.title}
        </h1>
        <div className="text-sm lightText mb-4">
          <Date dateString={postData.date} className="lightText" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
      </article>
    </>
  );
}

export default Post;