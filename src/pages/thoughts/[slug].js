import Head from "next/head";

function Thought ({data, error}) {
  // console.log(data);


    return (
        <main>
    <Head>
        <title>{data.header}</title>
        {/* <meta name="description" content={data.sub_header.replace( /(<([^>]+)>)/ig, '').slice(0,120)} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <meta name="image" content={data.feature_img} />

        {/* <!-- Schema.org for Google --> */}
<meta itemProp="name" content={data.header} />
{/* <meta itemProp="description" content={data.sub_header.replace( /(<([^>]+)>)/ig, '').slice(0,120)} /> */}
<meta itemProp="image" content={data.feature_img} />

        {/* Facebook  */}
        <meta property="og:title"         content={data.header} />
        {/* <meta property="og:description"   content={data.detail.replace( /(<([^>]+)>)/ig, '').slice(0,120)} /> */}
        <meta property="og:image"         content={data.feature_img} />

      </Head>
{/* <!-- Blog Article --> */}
<div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
  <div className="max-w-2xl">
    {/* <!-- Avatar Media --> */}
    <div className="flex justify-between items-center mb-6">
      <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
        <div className="flex-shrink-0">
          <img className="h-12 w-12 rounded-full" src={"/images/profile.jpg"} alt={data.header} />
        </div>

        <div className="grow">
          <div className="flex justify-between items-center gap-x-2">
            <div>
              <div className="inline-block">
                <div className="sm:mb-1 block text-start">
                  <span className="font-semibold">
                    Rohit Maurya
                  </span>

                </div>
              </div>

              <ul className="text-xs text-gray-500">
                <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                  {new Date(data.created).toDateString()}
                </li>
                <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                  {data.read_time_minutes} min read
                </li>
              </ul>
            </div>

            {/* <!-- Button Group --> */}
            <div>
            <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2">
                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
                Tweet
              </a>
            </button>

            </div>
            {/* <!-- End Button Group --> */}
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End/ Avatar Media --> */}

    {/* <!-- Content --> */}
    {/* <div className="space-y-5 md:space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Announcing a free plan for small teams</h2>

        <p className="text-lg text-gray-800 dark:text-gray-200">At preline, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow.</p>
      </div>

      <p className="text-lg text-gray-800 dark:text-gray-200">We're proud to be a part of creating a more open culture and to continue building a product that supports this vision.</p>

      <figure>
        <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
        <figcaption className="mt-3 text-sm text-center text-gray-500">
          A woman sitting at a table.
        </figcaption>
      </figure>

      <p className="text-lg text-gray-800 dark:text-gray-200">As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We've also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.</p>

      <p className="text-lg text-gray-800 dark:text-gray-200">That's why we are excited to share that we now have a <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">free version of Preline</a>, which will allow individual designers, startups and other small teams a chance to create a culture of openness early on.</p>

      <blockquote className="text-center p-4 sm:px-7">
        <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200">
          To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
        </p>
        <p className="mt-5 text-gray-800 dark:text-gray-200">
          Nicole Grazioso
        </p>
      </blockquote>

      <figure>
        <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
        <figcaption className="mt-3 text-sm text-center text-gray-500">
          A man and a woman looking at a cell phone.
        </figcaption>
      </figure>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold dark:text-white">Bringing the culture of sharing to everyone</h3>

        <p className="text-lg text-gray-800 dark:text-gray-200">We know the power of sharing is real, and we want to create an opportunity for everyone to try Preline and explore how transformative open communication can be. Now you can have a team of one or two designers and unlimited spectators (think PMs, management, marketing, etc.) share work and explore the design process earlier.</p>
      </div>

      <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
        <li className="ps-2">Preline allows us to collaborate in real time and is a really great way for leadership on the team to stay up-to-date with what everybody is working on," <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">said</a> Stewart Scott-Curran, Intercom's Director of Brand Design.</li>
        <li className="ps-2">Preline opened a new way of sharing. It's a persistent way for everyone to see and absorb each other's work," said David Scott, Creative Director at <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">Eventbrite</a>.</li>
      </ul>

      <p className="text-lg text-gray-800 dark:text-gray-200">Small teams and individual designers need a space where they can watch the design process unfold, both for themselves and for the people they work with – no matter if it's a fellow designer, product manager, developer or client. Preline allows you to invite more people into the process, creating a central place for conversation around design. As those teams grow, transparency and collaboration becomes integrated in how they communicate and work together.</p>

      <div>
        <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Plan
        </a>
        <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Web development
        </a>
        <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Free
        </a>
        <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Team
        </a>
      </div>
    </div> */}
    <br />

    <div className=" prose max-w-none" dangerouslySetInnerHTML={{ __html: data.detail }}></div>

    {/* <!-- End Content --> */}
  </div>
</div>

        </main>
    )
}


export async function getServerSideProps(context) {
  // Fetch data from external API
  const {slug} = context.params;
  const url = process.env.API_URL+"short-tutorial/short-tut/"+slug;

  // console.log(url);

  const res = await fetch(url)
  const error = res.ok ? false : true
  const data = await res.json()

  return { 
      props: { 
          data:data, error:error
      } 

  }
}

export default Thought