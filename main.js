// example 2

const capitalWords =(words)=>{
  return words
  .map((word) => word.split('_')
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(' ')
  
  )
}
  
console.log(capitalWords(['life_is_beautiful_when_the_sun_shines']))

// example 3

const users = [
  { name: 'lasha', age: 30 },
  { name: 'saba', age: 20 }
 
]
const sorted = users.sort((a, b) => a.age - b.age);

console.log(sorted)

