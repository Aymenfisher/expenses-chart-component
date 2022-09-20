let data = [  //leave the order as it is
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
];

//getting the max value

let amounts = data.map((amount) => {return amount["amount"]});
const maxAmount = Math.max(...amounts);

// getting the days:

let days = document.getElementsByClassName('day');

function showCharts (){
    for( let i=0 ; i < amounts.length; i++) {
        let heightValue = 90 * amounts[i] / maxAmount; // the max height (90%) is for the max value
        let barElement = days[i].getElementsByClassName('bar')[0];
        barElement.style.height = `${heightValue}%`;

        /*fill and position the mini bar element: */
        //position: right above the bar:
        let miniBar = days[i].getElementsByClassName('value-bar')[0];
        miniBar.style.bottom = `calc(${heightValue}% + 8%)`;

        //fill
        let miniBarAmount = days[i].getElementsByClassName('day-amount')[0];
        miniBarAmount.innerText = amounts[i];
        

        //style the current day bar:
        const today = new Date().getDay();  // the current day number: sunday: 0 , saturday: 6
        if (today == barElement.id){
            barElement.style.backgroundColor = 'hsl(186, 34%, 60%)';
        }
    }
    
}

showCharts();

// showing the Value mini bar when hovering the bar:
let bars = [...document.getElementsByClassName('bar')];

for (let i = 0 ; i<bars.length; i++){
    bars[i].addEventListener('mouseover',(e) => {
        let valueBar = bars[i].parentElement.getElementsByClassName('value-bar')[0];
        valueBar.style.display = 'block';
    })
    bars[i].addEventListener('mouseleave',(e) => {
        let valueBar = bars[i].parentElement.getElementsByClassName('value-bar')[0];
        valueBar.style.display = 'none';
    })
}






