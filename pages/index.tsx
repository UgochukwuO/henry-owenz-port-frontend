import Head from 'next/head'
import Image from 'next/image'
import styles from '../css/Home.module.css'
import styles2 from '../css/blog.module.css'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import GridContainer from '../components/layout/GridContainer';

function Home({ getBlogs }) {


  return (
  <>
    <GridContainer >
    <h1 style={{textAlign: "center"}}> Henry Owenz </h1>
      <div className={styles.grid}>
        {getBlogs.map((blog) => (
          <div key={blog.Date_Created} className={styles.card}>
            <h1>
              {blog.Title} 
            </h1>
            <p>
              {blog.Content}
            </p>
            <div style={{paddingTop: '15px', color: 'grey'}}>
            </div>
          </div>
        ))}
      </div>
  </GridContainer>
</>
  )
}

export default Home;

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