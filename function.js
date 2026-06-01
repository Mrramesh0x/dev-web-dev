function goodMorning(){
alert("Good Morning Dev")
}

function goodAfternoon(){
alert("Good afternoon Dev")
}

function goodEvening(){
alert("Good evening Dev")
}

function goodNight(){
alert("Good night Dev")
}




const goodMorningButton = document.querySelector(".morning-btn")
const goodAfternoonButton = document.querySelector(".afternoon-btn")
const goodEveningButton = document.querySelector(".evening-btn")
const goodNightButton = document.querySelector(".night-btn")

goodMorningButton.addEventListener("click",goodMorning)
goodAfternoonButton.addEventListener("click",goodAfternoon)
goodEveningButton.addEventListener("click",goodEvening)
goodNightButton.addEventListener("click",goodNight)


