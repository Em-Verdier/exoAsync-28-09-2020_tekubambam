import { COPYFILE_EXCL } from 'constants'
import fs from 'fs'

fs.copyFileSync('../file1.txt', '../file2.txt', COPYFILE_EXCL)
console.log('file1.txt was copied to file2.txt')
