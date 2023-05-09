// str = `
// one two three
// four five six
// `

// // ['one', 'two', 'three', 'four', 'five', 'six']

// const lines = str.trim().split('\n')
// // console.log(lines)
// const numbers = []
// for( const line of lines) {
// 	numbers.push(...line.split(' '))
// }
// // numbers.push(...lines[0].split(' '))
// // numbers.push(...lines[1].split(' '))
// console.log(numbers)

/*********************************** Homework ************************************/
str = `
one-two_three
four  five-six
seven_eight nine
`
/************************************Option 1**************************************/
// const arr1 = []
// for (const elem of [str]) {
//     arr1.push(...elem.split('\n'))
// }
// const arr2 = []
// for (const elem of arr1) {
//     arr2.push(...elem.split('_'))
// }
// const arr3 = []
// for (const elem of arr2) {
//     arr3.push(...elem.split('-'))
// }
// const arr4 = []
// for (const elem of arr3) {
//     arr4.push(...elem.split(' '))
// }
// console.log(arr4)

/************************************Option 2**************************************/
// const delimeters = ['-', '_', ' ', '\n']
const array = []
let tmp = ''
for (const char of str) {
    // console.log(char)
    // if (delimeters.includes(char)) {
    if (char !== '-' && char !== '_' && char !== ' ' && char !== '\n') {
        tmp += char
    } else {
        if (tmp !== '') {
            array.push(tmp)
        }
        tmp = ''
    }
}
console.log(array)