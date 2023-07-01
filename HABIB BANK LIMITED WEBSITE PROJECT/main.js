const table = [
    {
        name:'John Doe',
        loan: '25 L',
        date:'25-08-2019',
        city:'LIC',
        state:'NY'
    }, 
    {
        name: "Susan Jons",
        loan: '35 L',
        date:'15-10-2019',
        city: "Main city",
        state: "FL",
      },
      {
        name: "Mike Smith",
        loan: '15 L',
        date:'05-3-2019',
        city: "Los Anglous",
        state: "CA",
      },
      {
        name: "Adam Jim",
        loan: '25 L',
        date:'29-04-2019',
        city: "Flanders",
        state: "NJ",
      },
      {
        name: "Mike Doe",
        loan: '55 L',
        date:'24-06-2019',
        city: "LIC",
        state: "NY",
      },
      {
        name: "Sally Jons",
        loan: '75 L',
        date:'22-07-2019',
        city: "Main city",
        state: "FL",
      },
      {
        name: "Arnold Smith",
        loan: '25 L',
        date:'15-05-2020',
        city: "Los Anglous",
        state: "CA",
      },
      {
        name: "Adel Jim",
        loan: '25 L',
        date:'02-07-2019',
        city: "Flanders",
        state: "NJ",
      }
]

const tableHeader = Object.keys(table[0]);
const search = document.querySelector('.filter-input');
const output = document.querySelector('.output');

window.addEventListener('DOMContentLoaded', loadTable);
search.addEventListener('input', filter);


function loadTable(){
    let temp = `<table> <tr>`;
    tableHeader.forEach( header=> temp+= `<th> ${header.toUpperCase()} </th>`);
    temp+=`<tr>`
    table.forEach(row => {
        temp +=`
        <tr>
          <td>${row.name}</td>
          <td>${row.age}</td>
          <td>${row.occupation}</td>
          <td>${row.city}</td>
          <td>${row.state}</td>
        </tr>
        `
    });

    temp+=`</table>`
    output.innerHTML = temp;
}


function filter(e){
let results;
let temp ="";

results = table.filter( item=> 
    item.state.toLowerCase().includes(e.target.value.toLowerCase()) || 
    item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.occupation.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.age.toLowerCase().includes(e.target.value.toLowerCase())
    );
   console.log(results)
    if(results.length>0){
        temp = `<table> <tr>`;
        tableHeader.forEach( header=> temp+= `<th> ${header.toUpperCase()} </th>`);
        temp+=`<tr>`
        results.forEach(row => {
            temp +=`
            <tr>
              <td>${row.name}</td>
              <td>${row.age}</td>
              <td>${row.occupation}</td>
              <td>${row.city}</td>
              <td>${row.state}</td>
            </tr>
            `
        });
        temp+=`</table>`  
    }else{
        temp =`<div class="no-item">Item Not Found </div>`
    }

    output.innerHTML=temp;
}