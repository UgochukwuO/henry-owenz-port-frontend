import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home({ getBlogs }) {


  return (
  <>
  <h1> Henry Owenz Portfolio</h1>
    <div className={styles.grid}>
      {getBlogs.map((blog) => (
        <div key={blog._id} className={styles.card}>
          <h1>
            {blog.Title} 
          </h1>
          <p>
            {blog.Content}
          </p>
          <div style={{paddingTop: '15px', color: 'grey'}}>
            Author: {blog.Author}
          </div>
        </div>
      ))}
    </div>
</>
  )
}

export async function getServerSideProps() {
    //const { data } = await client.query()
    //const blogsData = JSON.stringify(data);
    const { data } = await client.query({
      query: gql`
        query getBlogs {
          getBlogs {
            Title
            Content
            Author
            Date_Created
          }
        }
      `,
    });

    return {
      props: {
        getBlogs: JSON.parse(JSON.stringify(data.getBlogs)),
      },
      //revalidate: 1,
   };
}