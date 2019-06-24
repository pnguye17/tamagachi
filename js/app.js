class Animals {
    constructor(name, age, hunger, sleepy, boredom) {
        this.name = name
        this.age = 1
        this.hunger = Math.floor(Math.random() * 9) + 1
        this.sleepy = Math.floor(Math.random() * 9) + 1
        this.boredom = Math.floor(Math.random() * 9) + 1
    }
    hungry() {
        if (this.hunger > 0) {
        console.log("I am hungry")
        let food = prompt("What kind of food, do you want to feed him?")
        console.log(`he likes the ${food} and is eating it very quickly`)
        this.hunger -= 3
        } else{
            console.log("I am not hungry")
        }
    }
    bored() {
        if (this.boredom > 0) {
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
    sleepy() {
        let x = petArray[0].sleepy - 1
        $sleepy.val(x)
        $displaysleep.text(`Sleepiness is ${x}`)
        
    }
}

let petArray = []

const $boredom = $('#boredom')
const $displayboredom = $('<h3/>')

const $hunger = $('#hunger')
const $displayhunger = $('<h3/>')

const $sleepy = $('#sleepy')
const $displaysleep = $('<h3/>')

const createPet = () =>{
    let nameInput = prompt("what is your pet's name?")
    const $baby = $('#monster')
    const $statusBar = $('.status')
    $baby.css("visibility", "visible")
    $statusBar.css("visibility", "visible")

    const pet = new Animals(`${nameInput}`)
    petArray.push(pet)


}


$('#tomagachi').on('click', () => {
    createPet()

    setInterval(() => {
        petArray[0].boredom + 1
        $boredom.val(petArray[0].boredom)
        $displayboredom.text(`Boredom is ${petArray[0].boredom}`)
        $('#boredom').before($displayboredom)

        petArray[0].sleepy + 1
        $sleepy.val(petArray[0].sleepy)
        $displaysleep.text(`Sleepiness is ${petArray[0].sleepy}`)
        $('#sleepy').before($displaysleep)

        petArray[0].hunger + 1
        $hunger.val(petArray[0].hunger)
        $displayhunger.text(`Hunger is ${petArray[0].hunger}`)
        $('#hunger').before($displayhunger)
    }, 1000)
})

$('#hungry').on("click", () => {
    petArray[0].hungry()
    $hunger.val(petArray[0].hunger)
    $displayhunger.text(`Hunger is ${petArray[0].hunger}`)
    $('#hunger').before($displayhunger)

})


$('#bored').on("click", () => {
    petArray[0].bored()
    $boredom.val(petArray[0].boredom)
    $displayboredom.text(`Boredom is ${petArray[0].boredom}`)
})

$('#tired').on("click", () => {


})


