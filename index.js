const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// ALL FAILED ATTEMPTS: Probably spent close to 6 hours tweaking this code to no avail

// const sentanceSplitter = (str) =>{
//   return str.split(' ')
//   }
 
// const wordCapitalizer = (array) =>{ return array.map((word)=>{
//   let splitWord = word.split('');
//   splitWord[0] = splitWord[0].toUpperCase()
//   //console.log(splitWord.join(''))
//   return splitWord.join('')
// })
// }

// const titleCased = () =>{
//   return tutorials.map(wordCapitalizer(sentanceSplitter()))
// }

// const titleCased = () => {
//   return tutorials.map((str) =>{
//     let splitStr = str.split(' ');
//     return splitStr.map((word)=>{
//       let splitWord = word.split('');
//       splitWord[0] = splitWord[0].toUpperCase()
//       return splitWord.join('')
//     })
//   })
// }

const titleCased = () =>{
  return tutorials.map((str) => {
    const words = str.split(' ')
    const wordCapitalizer = words.map((word)=>{
      return word[0].toUpperCase() + word.slice(1)
    })
    return wordCapitalizer.join(' ')
  })
}

