class Animals {
    constructor(name, age, type, hunger,sleepy,boredom) {
        this.name = name
        this.age = 1
        this.type = type
        this.hunger = Math.floor(Math.random() * 9) + 1
        this.sleepy = Math.floor(Math.random() * 9) + 1
        this.boredom = Math.floor(Math.random() * 9) + 1
    }
    hungry() {
        if (this.hunger >= 3) {
        console.log("I am hungry")
        let food = prompt("What kind of food, do you want to feed him?")
        console.log(`he likes the ${food} and is eating it very quickly`)
        this.hunger -= 3
        } else{
            console.log("I am not hungry")
        }
    }
    sleepy() {
        // if (this.sleepy > 6) {
        // console.log("I am sleepy")
        let x = prompt("Would you like to sing a lullaby?")
            if (x === "yes") {
                this.sleepy -= 4
                console.log("you sung a beautiful lullaby")
            } else {
                this.sleepy += 1
                console.log("I AM SLEEPY")
            }

    }

    bored(){
        if (this.boredom > 4) {
        console.log("I am bored")
        let x = prompt("Your friend is bored, would you like to play?")
            if (x == "yes") {
                console.log("I am not bored anymore")
                this.boredom -= 3
            } else {
                console.log("Your friend is still bored")
                this.boredom += 2

            }
    }
}
}
let petArray = []
const createPet = () =>{
    let nameInput = prompt("what is your pet's name?")
    const $baby = $('#monster')
    $baby.css("visibility", "visible")
    const pet = new Animals(`${nameInput}`)
    petArray.push(pet)

}
const $boredom = $('#boredom')
const $displayboredom = $('<h3/>')

const $hunger = $('#hunger')
const $displayhunger = $('<h3/>')

const $sleepy = $('#sleepy')
const $displaysleep = $('<h3/>')

$('#tomagachi').on('click', (e) => {
    createPet()
   
    $boredom.val(petArray[0].boredom)
    $displayboredom.text(`Boredom is ${petArray[0].boredom}`)
    $('#boredom').before($displayboredom)

    $hunger.val(petArray[0].hunger)
    $displayhunger.text(`Hunger is ${petArray[0].hunger}`)
    $('#hunger').before($displayhunger)

    $sleepy.val(petArray[0].sleepy)
    $displaysleep.text(`Sleepiness is ${petArray[0].sleepy}`)
    $('#sleepy').before($displaysleep)

})

$('#hungry').on("click", () => {
    petArray[0].hungry()
    console.log(petArray[0].hunger)
    $hunger.val(petArray[0].hunger)
    console.log(petArray[0].hunger)
    $displayhunger.text(`Hunger is ${petArray[0].hunger}`)
    $('#hunger').before($displayhunger)

})


$('#tired').on("click", () => {
    petArray[0].sleepy()
})

$('#bored').on("click", () => {
    petArray[0].bored()
})




