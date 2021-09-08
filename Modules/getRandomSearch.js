const alphabets = 
[
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]

const getRandomAlphabet = () => {
    const randomAlphabet = Math.floor(Math.random() * alphabets.length)
    return alphabets[randomAlphabet]
}

export default getRandomAlphabet