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






function titleCased(){

  return tutorials.map((element)=>
    {makeSentence(capitalizeFirst(arrayOfwords(element)))
    let wordsArray = arrayOfwords(element)  // Split the sentence into words
    let capitalizedWords = capitalizeFirst(wordsArray)  // Capitalize the words
    return makeSentence(capitalizedWords)}
)

}

function arrayOfwords(element){
  let spaceindex=0
  let lastindex =0
  let array = []
  let word
  for (const letter of element){
    if (letter === " "){
      word = element.slice(lastindex,spaceindex)
      lastindex = spaceindex+1
      array.push(word)    
  }
  spaceindex++
 }
 word = element.slice(lastindex);
 if (word) array.push(word);  // Add the last word to the array if it exists
 
 return array
}

function capitalizeFirst(array){
  let capital
  let capitalarray=[]
  for (const words of array){
    capital = words.slice(0,1).toUpperCase()+words.slice(1)
    capitalarray.push(capital)
  }
  return capitalarray
}

function makeSentence(capitalarray){
  return capitalarray.join(" ")
  }


console.log(titleCased())