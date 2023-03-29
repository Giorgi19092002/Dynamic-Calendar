const currentDate = document.querySelector(".current-date"),
currentDays = document.querySelector('.days'),
prevNextIcon = document.querySelectorAll('.icons span')

let date = new Date(),
curentYear = date.getFullYear(),
currMonth = date.getMonth()

let dates = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November','December']

const renderCalendar = () =>{
    let firstDayOfMonth = new Date(curentYear,currMonth,1).getDay()
    let lastDateOfMonth = new Date(curentYear,currMonth + 1, 0).getDate()
    let lastDateOfLastMonth = new Date(curentYear,currMonth,0).getDate()
    let lastDayOfMonth = new Date(curentYear,currMonth,lastDateOfMonth).getDay()
    let dayesDate = ''


    for(let i = firstDayOfMonth; i > 0; i--){
        dayesDate += `<li class = "inactive">${lastDateOfLastMonth - i + 1}</li>`
    }

    for(let i = 1 ; i <= lastDateOfMonth; i++){
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && curentYear === new Date().getFullYear() ? 'active' : ''
       dayesDate += `<li class = "${isToday}">${i}</li>`
    }

    for(let i = lastDayOfMonth; i < 6; i++){
        dayesDate += `<li class = "inactive">${i - lastDayOfMonth + 1}</li>`
    }
    currentDate.innerText = `${dates[currMonth]} ${curentYear}`,
    currentDays.innerHTML = dayesDate
}   

renderCalendar()

prevNextIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1
        renderCalendar()

        if(currMonth < 0 || currMonth > 11){
            date = new Date(curentYear,currMonth)
            curentYear = date.getFullYear()
            currMonth = date.getMonth()
        }
        else{
            date = new Date()
        }
    })
})