import fs from 'fs'
import { COPYFILE_EXCL } from 'constants'

const callback = (err) => {
    if (err) throw err
    console.log('text1.txt was copied to text2.txt')
}

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
fs.copyFile('../file1.txt', '../file2.txt', COPYFILE_EXCL, callback)
