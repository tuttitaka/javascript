


const arr1= [30, 19, 83, 72,]
let arr2 = []


console.log(arr1.slice(0, 2))
console.log(arr1.slice(2))

console.clear()

console.log('antes de adicionar:', arr2)

arr2.push(10, 37)
arr2.push(30)

console.log('depois de adicionar:', arr2)

console.log('antes de adicionar com unshift:', arr2)

arr2.unshift(0)

console.log('depois de adicionar com unshift:', arr2)

console.clear()


console.log('antes de adicionar com pop:', arr2)

arr2.pop()

console.log('depois de adicionar com pop:', arr2)

console.log('antes de adicionar com shift:', arr2)

arr2.shift()
console.log('depois de adicionar com shift:', arr2)

console.clear()



console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))

console.clear()



console.log(arr1)


let indice = arr1.indexOf(83)

console.log( indice)

let arr3 = [1,2,3,4,5,3]

console.log(arr3.lastIndexOf(3))

console.clear()

console.log(arr1)

console.log(arr1.includes(10))


console.clear()

console.log('arr1 normal', arr1)

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido', arr1Invertido)