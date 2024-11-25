import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout";
import Link from "next/link";
import Date from "@/components/date";
import { getSortedPostsData } from "@/utils/posts";
import { Button } from "antd";

export default function Home () {
  const allPostsData = getSortedPostsData();
  return (
    <Layout home>
      <div>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className='text-xl leading-normal text-center'>
          <p>你好，我是 ZJ</p>
          <p>欢迎来到我的博客！</p>
        </section>

        <section className='text-xl leading-normal pt-4'>
          <h2 className=' text-2xl my-4 font-bold'>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className='mb-5'>
                <Link href={`/posts/${id}`}>
                  {title}
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
