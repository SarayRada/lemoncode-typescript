import "./style.css";

interface musicGroup {
    name: string,
    foundationYear: number,
    active: boolean,
    musicalGenre: string
}

const beatles: musicGroup = {
    name: "The Beatles",
    foundationYear: 1960,
    active: false,
    musicalGenre: "🎵 Pop Rock"
}

const queen: musicGroup = {
    name: "Queen",
    foundationYear: 1970,
    active: false,
    musicalGenre: "🎸 Rock"
}

const ACDC: musicGroup = {
    name: "AC DC",
    foundationYear: 1973,
    active: true,
    musicalGenre: "🤘 Hard Rock"
}

const betthoven: musicGroup = {
    name: "Ludwig van Beethoven",
    foundationYear: 1770,
    active: false,
    musicalGenre: "🎼 Clasic"
}

const rolling: musicGroup = {
    name: "The Rolling Stones",
    foundationYear: 1962,
    active: true,
    musicalGenre: "🎸 Rock"
}

const isItActive = (active: boolean) => {
    return active == true ? "Active" : "Non Active";
}
const groupstyle = "font-weight: bold; font-size: 20px; background-color: green"

console.log(`%c${beatles.name}`, groupstyle)
console.log(`${beatles.foundationYear}/${isItActive(beatles.active)}/${beatles.musicalGenre}`)
console.log(`%c${queen.name}`, groupstyle) 
console.log(`${queen.foundationYear}/${isItActive(queen.active)}/${queen.musicalGenre}`)
console.log(`%c${ACDC.name}`, groupstyle) 
console.log(`${ACDC.foundationYear}/${isItActive(ACDC.active)}/${ACDC.musicalGenre}`)
console.log(`%c${betthoven.name}`, groupstyle)
console.log(`${betthoven.foundationYear}/${isItActive(betthoven.active)}/${betthoven.musicalGenre}`)
console.log(`%c${rolling.name}`, groupstyle)
console.log(`${rolling.foundationYear}/${isItActive(rolling.active)}/${rolling.musicalGenre}`)