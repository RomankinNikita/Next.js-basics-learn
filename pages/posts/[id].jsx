import Head from "next/head";
import Layout from "../../components/layout";
import { getPostIdList, getPost } from "../../lib/posts";

export default function Post({ post }) {
  const { id, title, body } = post;
  return (
    <Layout>
      <Head>
        <title>Post: {id}</title>
      </Head>
      <h3>{title}</h3>
      <hr />
      <p>Post id: {id}</p>
      <hr />
      {body}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPostIdList();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return {
    props: {
      post,
    },
  };
}
