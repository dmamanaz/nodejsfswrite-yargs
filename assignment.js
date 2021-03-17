const fs = require('fs')
const yargs = require('yargs')

var filename = yargs.argv.filename;
var fileArray = []



//1)Write in file uisng fs module and create a new file for every operation.
// fs.writeFile('first.txt', 'Creating the firs file.', function(err) {
//     if(err)
//     console.log(err)
// })

// fs.writeFile('secondfile.txt', 'This is my second file.', function(err) {
//     if(err)
//     console.log(err)
// })

// fs.writeFile('filethird.txt', 'Let us create our third file.', function(err) {
//     if(err)
//     console.log(err)
// })

// fs.writeFile('forthfile.txt', 'And the last file.', function(err) {
//     if(err)
//     console.log(err)
// })

//2) Take input from user as filename and save them in array. In one separate text file.
fs.readFile('filenames.txt', function(err, data) {
    if (data) {
        fileArray = JSON.parse(data)
    console.log("File exists in the array", fileArray.includes(filename))
    if (fileArray.includes(filename)) {
        return console.error("file exists");
    } 
    else {

        fileArray.push(filename)
        console.log("fileArray", fileArray)
        fs.writeFile("filenames.txt", JSON.stringify(fileArray), function (err) {
            if (err)
                console.log(err)
        })

        fs.writeFile(filename, "You are awesome", function (err) {
            if (err)
                throw err
            else
                console.log("End of the program.");
        })
    }
}
})
