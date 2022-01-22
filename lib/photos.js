import fs from 'fs'
const photoDirectory = './public/images/gallery1'

export function getPhotos(){
    const photos = fs.readdirSync(photoDirectory).map(photo => {

        const photoPath = `${photoDirectory}/${photo}`      
        const data = fs.readFileSync(photoPath)
        console.log(data)
        return ( photo )
    })
    return (photos)
    
}