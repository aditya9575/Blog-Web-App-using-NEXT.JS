// find the corresponding files to the slug and populate them 
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/BlogPost.module.css"
import * as fs from "fs";

const Slug = (props) => {

  function createMarkup(c){
    return {__html: c};
  }

  const [blog, setBlog] = useState(props.myBlog)

  return (
    <div className={styles.container}>
      <h1>{blog && blog.title}</h1>
      {blog &&<div className={styles.content} dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
         
      
      <hr />
    </div>
  );
};

// here the defining of the paths is done dynamically
export async function getStaticPaths() {
   return{
    paths: [
      { params: {slug: "how-to-learn-javascript"}},
      { params: {slug: "how-to-learn-nextjs"}},
      { params: {slug: "how-to-learn-reactjs"}},
      { params: {slug: "how-to-learn-sql"}},
    ],
    fallback:true
   };
}

// getStaticProps is used to bring props to the component after being ran on server but like in case of dynamic generation and 
// where we use slugs how will the getStaticProps know how much data and the data of which page is to be pre generated and kept as 
// the static file so for this reason we use getStaticPaths to be able to tell the getStaticProps about the paths for which the 
// static data has to be generated 
export async function getStaticProps(context) {

  // in case of getStaticProps slug is found under context.params
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json` ,'utf-8')
    

  return {
    props: { myBlog:JSON.parse(myBlog) },
  }
}


// export async function getServerSideProps(context) {

//   // console.log(context.query)
//   // const router = useRouter();

//   const { slug } = context.query;
//   console.log("useEffect is running")
//   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//   let singleBlog = await data.json()

//   return {
//     props: { singleBlog },
//   }
// }

export default Slug;
