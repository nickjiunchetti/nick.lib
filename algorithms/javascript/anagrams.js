// find all anagrams in an array of strings

/*
input:
[
  'rope',   'red rum',
  'silent', 'pore',
  'murder', 'listen',
  'repo',   'endeavour'
]

output:  [
  [ 'rope', 'pore', 'repo' ],
  [ 'red rum', 'murder' ],
  [ 'silent', 'listen' ],
  [ 'endeavour' ]
]
*/

function anagram(stringsArray) {
  const sortedChars = stringsArray.map(string =>
    string.replace(/\s+/g, '').split('').sort().join('')
  )

  const response = sortedChars.reduce(
    (accArray, currentString, index, array) => {
      const firstStringIndex = array.indexOf(currentString)

      if (index === firstStringIndex) {
        accArray.push([stringsArray[index]])
      } else {
        const anagramGroupIndex = accArray.findIndex(innerArray => {
          return (
            innerArray[0].replace(/\s+/g, '').split('').sort().join('') ===
            currentString
          )
        })
        accArray[anagramGroupIndex].push(stringsArray[index])
      }

      return accArray
    },
    []
  )

  console.log('input: ', sampleArray)
  console.log('output: ', response)
}

const sampleArray = [
  'rope',
  'red rum',
  'silent',
  'pore',
  'murder',
  'listen',
  'repo',
  'endeavour'
]

anagram(sampleArray)
