import fsPromises from 'fs/promises'
import { COPYFILE_EXCL } from 'constants'

const src = process.argv[2]
const dest = process.argv[3]

fsPromises
    .copyFile(src, dest, COPYFILE_EXCL)
    .then(() => console.log('source.txt was copied to destination.txt'))
    .catch(() => console.log('The file could not be copied'))

if (process.argv.length !== 4) {
    console.log('Usage: node asyncPromise.js src dest')
}
if (!isNaN(src) || !isNaN(dest)) {
    console.log('Erreur: src <String> dest <String>')
}
