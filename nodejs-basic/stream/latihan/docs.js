const fs = require('fs')

const content = 'Some content!'

//create from content.
/*fs.writeFile('../stream/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})*/

//stack of content
// fs.writeFile('../stream/test.txt', content, { flag: 'a+' }, err => {})


// fs.readFile('../stream/test.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })


try {
  const data = fs.readFileSync('../stream/test.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}

const readable = getReadableStreamSomehow();
readable.on('readable', function() {
  // There is some data to read now.
  let data;

  while (data = this.read()) {
    console.log(data);
  }
});