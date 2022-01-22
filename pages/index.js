

import Head from 'next/head'
import Link from 'next/link'


import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'
import { getPhotos } from '../lib/photos'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allPhotos = getPhotos()
  return {
    props: {
      allPostsData,
      allPhotos
    }
  }
}

export default function Home({ allPostsData, allPhotos }) {
  console.log (allPostsData)
  console.log (allPhotos)

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi. My name is Matt. Welcome to my practice dummy website! Hope you like it =)</p>
        <p>(you can learn how to build a site like this on {' '}
          <a href="https://nextjs.org/learn">this Next.js tutorial</a>.)
        </p>
        <p>
          Here's a <Link href={'./gallery'}><a>dynamic photo gallery </a></Link>
           I'm working on. It looks through all the images in a directory 
           and displays them all in a grid.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}><a>{title}</a></Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              
            </li>
          ))}
        </ul>

      </section>
    </Layout>
  )
}
