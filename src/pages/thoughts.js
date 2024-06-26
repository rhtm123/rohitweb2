import Link from "next/link";
import Head from "next/head";
import React, { useState, useEffect } from "react";

function Thoughts () {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = React.useState(true);

  const [next, setNext] = useState();
  const [loadingMore, setLoadingMore] = React.useState(false);


  const fetchArticles = async (url, firstTime=true) => {
    setLoading(true);
    fetch(url)
    .then(async (response) => {
      if (response.ok) {
        let data1 = await response.json();
        console.log(data1);
        setLoading(false);

        if (firstTime) { 
          setArticles(data1.results);
        }else {
          setArticles((oldArray) => [...oldArray, ...data1.results])
        }
        setNext(data1.next);
        setLoadingMore(false);
       } else {
        setLoadingMore(false);
      }
    }).catch(error=>{ console.log("error happend") }) 
  }

  const loadMore = () => {
      setLoadingMore(true);
      fetchArticles(next);
  }

  useEffect(()=>{
    let url = process.env.API_URL+"short-tutorial/short-tuts/?author=&is_published=&tags=26"
    fetchArticles(url);
  },[])


    return (
      <>
      <Head>
        <title>Read the toughts of Rohit Maurya</title>
        <meta name="description" content="Rohit Maurya is founder of Coding Chaska. He teaches Python, Website development, Data Science, & Many more IT subjects" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

        <main>
            {/* <!-- Card Blog --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Title --> */}
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">My thoughts</h2>
    <p className="mt-1">Read my articles on different topics here</p>
  </div>
  {/* <!-- End Title --> */}

  {/* <!-- Grid --> */}
  
  {loading && <div className="py-8">
  <span className="loading loading-dots loading-md"></span>

    </div>}

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* <!-- Card --> */}

    {articles.map((article,index)=>
    <Link data-aos="zoom-in" href={"/thoughts/"+article.slug} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
    <div className="aspect-w-16 aspect-h-11">
      <img className="w-full object-cover rounded-xl" 
      src={article?.feature_img?article.feature_img:"https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
      alt={article.header} />
    </div>
    <div className="my-6">
      <h3 className="text-xl font-semibold">
        {article.header}
      </h3>
      {/* <p className="mt-5 text-gray-600 dark:text-gray-400">
        {article.sub_header}
      </p> */}
    </div>
    {/* <div className="mt-auto flex items-center gap-x-3">
      <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
      <div>
        <h5 className="text-sm text-gray-800 dark:text-gray-200">By Lauren Waller</h5>
      </div>
    </div> */}
  </Link>
    )}
    
  </div>
  {/* <!-- End Grid --> */}

  {/* <div className="mt-12 text-center">
    <a className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-500 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      Read more
      <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </a>
  </div> */}
  {/* <!-- Read more --> */}
</div>

        </main>

      </>
    )
}





export default Thoughts