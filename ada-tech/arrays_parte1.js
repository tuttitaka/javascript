

let arr = ['luis', 21, 1.82, true]


console.log(arr)


console.log('primeiro elemento:',arr[0])
console.log('segundo elemento:',arr[1])
console.log('terceiro elemento:',arr[2])
console.log('quarto elemento:',arr[3])


console.log(arr.length)

console.clear()


for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

console.clear()

for (let elemento of arr) {
    console.log(elemento)
}

console.clear()

for (let variavel in arr) {
    console.log(variavel)
}