//Just testing out the file format and a few parsing options.
const fs = require('fs')

//Specify directory path
const directoryPath = 'uploadedConfig/'

//Read the contents of the directory.
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory: ', err)
        return;
    }

    for (const file of files) {
        //Construct the file path
        const filePath = directoryPath + file
    
        //Check if it is a file and not a dir.
        if (fs.statSync(filePath).isFile()) {
            //Read the file content.
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                    console.log('Error reading file: ', err)
                    return;
                }

                console.log(data)
            })
        }
    };   
});