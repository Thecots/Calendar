const fiestas = [
  {
    month: 1,
    days: [1,2,8,9,15,16,22,23,29,30]
  },
  {
    month: 2,
    days: [5,6,12,13,19,20,26,27]
  },
  {
    month: 3,
    days: [5,6,12,13,19,20,26,27]
  },
  {
    month: 4,
    days: [10,11,12,13,14,15,16,17,2,3,9,23,24,30]
  },
  {
    month: 5,
    days: [1,7,8,14,15,21,22,28,29]
  },
  {
    month: 6,
    days: [4,5,11,12,18,19,25,26]
  },
  {
    month: 7,
    days:[5,6,12,20,21,28,29]
  },
  {
    month: 8,
    days: [6,7,13,14,20,21,27,28]
  },
  {
    month: 9,
    days: [3,4,10,11,17,18,24,25],
  },
  {
    month: 10,
    days: [1,2,8,9,15,16,22,23,29,30],
  },
  {
    month: 11,
    days: [5,6,12,13,19,20,26,27]
  },
  ,
  {
    month: 12,
    days: [3,4,10,11,17,18,24,25,26,27,28,29,30,31],
  },
]

let f = 0;

fiestas.forEach(n => {
  n.days.forEach(s => {
    f+=1;
  })
})

console.log(f);

function calendar(month, year, data) {
  if(year == 2022){
    const daysInMonth = (m, y) => { return new Date(y, m, 0).getDate(); }
    const fisrtDay = new Date(`${year}-${month}-01`).getDay();
    const remainingDays = fisrtDay == 0 ? 7 : fisrtDay;
    const daysNow = daysInMonth(month, year) + remainingDays + -1;
    let template = '';
    for (let i = 0; i < remainingDays - 1; i++) {
      template += `<div class="dayBox outOfMonth" onclick ="calendar(${month == 1 ? 12 : month - 1},${month == 1 ? year - 1 : year})"><div class="bday">${daysInMonth(month - 1, year) - (remainingDays - 2) + i}</div></div>`;
    }
    for (let i = 1; i <= (daysInMonth(month, year)); i++) {
      let today = new Date(), x = today.getFullYear() == year && today.getMonth() + 1 == month && today.getDate() == i ? 'today' : '';
      let j = '';
      fiestas.forEach(n => {
        if(n.month == month && n.days.includes(i)){
          j = 'fiesta'
        }
      })
      template += `<div class="dayBox ${x} ${j}"><div class="bday">${i}</div><div class="binf"></div></div>`;
    }
    for (let i = 1; i <= 42 - daysNow; i++) {
      template += `<div class="dayBox outOfMonth" onclick ="calendar(${month == 12 ? 1 : month + 1},${month == 12 ? year + 1 : year})"><div class="bday">${i}</div></div>`;
    }
    document.querySelector('.secDayBox').innerHTML = template;
    document.querySelector('.secMon').innerHTML = `<h4 onclick="calendar(1,${year})">Ene</h4><h4 onclick="calendar(2,${year})">Feb</h4><h4 onclick="calendar(3,${year})">Mar</h4><h4 onclick="calendar(4,${year})">Abr</h4><h4 onclick="calendar(5,${year})">May</h4><h4 onclick="calendar(6,${year})">Jun</h4><h4 onclick="calendar(7,${year})">Jul</h4><h4 onclick="calendar(8,${year})">Ago</h4><h4 onclick="calendar(9,${year})">Sep</h4><h4 onclick="calendar(10,${year})">Oct</h4><h4 onclick="calendar(11,${year})">Nov</h4><h4 onclick="calendar(12,${year})">Dic</h4>`;
    document.querySelector('.secMon').classList.remove('today');
    document.querySelector(`.secMon h4:nth-child(${month})`).classList.add('today');
    document.querySelector('.secYea').innerHTML = `
    <img src="arrow.svg" onclick="calendar(${month == 1 ? 12 : month - 1},${month == 1 ? year - 1 : year})">
      <h1>${year}</h1>
    <img src="arrow.svg" onclick="calendar(${month == 12 ? 1 : month + 1},${month == 12 ? year + 1 : year})">
    `;
  }
};
calendar(new Date().getMonth() + 1, new Date().getFullYear());