import Image from "next/image"

import { getPhotos } from "../lib/photos"
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
    const allPhotos = getPhotos()
    return {
        props: {
            allPhotos
        }
    }
}

export default function Gallery (allPhotos) {




    return (
        <Layout>
            <div className={utilStyles.gallery}>
            
          
                {allPhotos.allPhotos.map(photo => {
                    const image = `/images/gallery1/${photo}`
                    
                    return(
               
                  <div key={photo} className={utilStyles.galleryPhoto}> 
                       <Image
                        src={image}
                        layout="responsive"
                        height={250}
                        width={700}
                        className={utilStyles.galleryPhoto}
                        alt={photo}
                        
                        
                    />
                    </div>
                )})}
            </div>
                  
        </Layout>
    )
}