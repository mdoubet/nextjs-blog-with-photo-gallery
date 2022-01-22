import fs from 'fs'
export default function handler(req, res) {
    console.log("hello")
    res.status(200).json({ text: 'Hello'})
    const testFolder = './data/';
    fs.readdir(testFolder, { withFileTypes: true }, (err, dirEntries) => {
      dirEntries.forEach((dirEntry) => {
        const { name } = dirEntry;
        if (dirEntry.isDirectory()) {
          console.log(`DIR: ${name}`);
        } else {
          console.log(`FILE: ${name}`);
        }
      })})
}