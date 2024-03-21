const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcome = document.querySelector('#welcome')
const h1 = welcome.querySelector('h1')

const key = "It's a secret to everybody."
const secret = "Grumble, Grumble..."

localStorage.setItem(key, secret)

if (isMorning == true) {
    h1.textContent = "Good morning! Welcome to Lexi's Page!"
}
if (isAfternoon == true) {
    h1.textContent = "Good afternoon! Welcome to Lexi's Page!"
}
if (isEvening == true) {
    h1.textContent = "Good evening! Welcome to Lexi's Page!"
}
