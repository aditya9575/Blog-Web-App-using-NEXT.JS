import React, { useEffect, useState } from 'react'
import styles from "../styles/blog.module.css"
import Link from 'next/link'


import * as fs from "fs";


// steps to display data 
// collecting all the files from blogdata directory


const blog = (props) => {
  console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs)

  // useEffect(() => {
  //   console.log("useEffect is running")
  //   fetch("http://localhost:3000/api/blogs").then((a) => {
  //     return a.json();
  //   })
  //     .then((parsed) => {

  //       console.log(parsed)
  //       setBlogs(parsed)
  //     })

  // }, [])

  return (
    <div className={styles.blogs}>
      <h2>Latest Blogs</h2>

      {blogs.map((blogItem) => {
        return <div key={blogItem.slug} className={styles.blogItem}>
          <Link href={`/blogpost/${blogItem.slug}`}>
            <h2>{blogItem.title}</h2></Link>
          <p>{blogItem.metadesc.substr(0, 150)}</p>
        </div>
      })}
    </div>
  )
}

// now we use getStaticPaths + getStaticProps
// export async function getStaticPaths() {
//   return{
//     paths: [
//       { params: {}}
//     ],
//     fallback: true
//   };
// }

export async function getStaticProps(context) {

 // we start by reading the file -> blogdata from our system 
 let data = await fs.promises.readdir("blogdata");
 let myfile;
 let allBlogs = [];

 for (let index = 0; index < data.length; index++) {
     const item = data[index];
     console.log(item);
     myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8');

     try {
         allBlogs.push(JSON.parse(myfile));
     } catch (err) {
         console.error(`Error parsing JSON in file ${item}:`, err);
     }
 }

  return {
    props: { allBlogs },
  }
}

// for server side pre-rendering 
// export async function getServerSideProps(context) {

//   let data = await fetch("http://localhost:3000/api/blogs")
//   let myblogdata = await data.json()

//   return {
//     props: { myblogdata },
//   }
// }

export default blog