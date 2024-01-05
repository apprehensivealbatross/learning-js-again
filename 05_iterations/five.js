// for
const coding = ["js", "ruby", "java", "go"]

coding.forEach((item) => {
    // console.log(item)
})

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Golang",
        languageFileName: "go"
    },
]

myCoding.forEach((item) => {
console.log(item.languageFileName)
})