const fs = require('fs')
const yargs = require('yargs')

fs.writeFile('abc.txt', 'Initial file.', function(err) {
    if(err)
    console.log(err)
})

fs.writeFile('abc.txt', 'hey how are you?', function(err) {
    if(err)
    console.log(err)
})

fs.writeFile('secondfile.txt', 'This is my second file.', function(err) {
    if(err)
    console.log(err)
})

fs.writeFile('thirdfile.txt', 'This is my third file.', function(err) {
    if(err)
    console.log(err)
})

fs.writeFile('forthfile.txt', 'This is my fourth file.', function(err) {
    if(err)
    console.log(err)
})