import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Matt Doubet'
export const siteTitle = 'Next.js Practice Website'

export default function Layout ({ children, home }) {
    return (
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Learning how to build a personal website using Next.js"
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={name}
                        
                    />
                    <h1 className={utilStyles.heading2Xl}>{name} <Image src="/images/fire_1f525.png" alt='animated fire emoji' height={84} width={44}/></h1>
                </>
            ) : (
                <>
                    <Link href="/">
                        <a>
                            <Image
                                 priority
                                 src="/images/profile.jpg"
                                 className={utilStyles.borderCircle}
                                 height={108}
                                 width={108}
                                 alt={name}
                             />
                        </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name} </a>
                        </Link>
                        <Image src="/images/fire_1f525.png" height={56} width={36} alt="animated fire emoji"/>
                    </h2>
                </>
            )}
        </header>

        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        )}
        </div>
    )
}