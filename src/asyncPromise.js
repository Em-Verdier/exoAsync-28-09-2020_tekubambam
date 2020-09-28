import fsPromises from 'fs/promises'
import { COPYFILE_EXCL } from 'constants'

fsPromises
    .copyFile('../file1.txt', '../file2.txt', COPYFILE_EXCL)
    .then(() => console.log('source.txt was copied to destination.txt'))
    .catch(() => console.log('The file could not be copied'))
