let now = new Date ();
let getYear = now.getFullYear();
let getMonth = now.getMonth() + 1;
let lastDayDate = new Date(getYear, getMonth, 0);
let lastDayOfTheMonth = lastDayDate.getDate();



//console.log(lastDayOfTheMonth)

let calendar = document.querySelector('#calendar')
for(let i = 1; i <= lastDayOfTheMonth; i++) {
// console.log(i)  verifico il ciclo

const dayCellNode = document.createElement('div'); 
dayCellNode.className = 'day';
const Day = document.createElement('h3');
Day.innerText = i;
let today = now.getDate();
if ( today === i) {
    dayCellNode.className = 'color-epic'
}
dayCellNode.appendChild(Day);
calendar.appendChild(dayCellNode);

}


function showAppointmens (index) {

    
}