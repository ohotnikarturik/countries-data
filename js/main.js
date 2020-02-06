const mainList = document.querySelector('.main__list');
const amount = document.querySelector('.span-search');

//to clean list of countries before event
let cleanList = (list) => {
  if (list.hasChildNodes()) {
    list.textContent = '';
  }
};

// to reverse countries as a-z
let sortList = (item) => item.sort();

// to reverse countries as z-a
let reverseList = (item) => item.sort().reverse();

let countriesMap = countries.map(country => ({
  name: country['name'], capital: country['capital'], flag: country['flag'], languages: country['languages'], population: country['population']
}));

// to create and add item to list
let createItemList = (array) => {
  for (const value of array) {

    let languagesArray = value.languages.map(item => item.name);

    let lengthValue = array.length;

    const nameCountry = document.createElement('h2');
    const capitalCountry = document.createElement('p');
    const populationCountry = document.createElement('p');
    const languagesCountry = document.createElement('p');
    languagesCountry.setAttribute('class', 'languages');
    const flagCountry = document.createElement('img');
    const item = document.createElement('li');
    item.setAttribute('class', 'main__item');
    amount.textContent = lengthValue;


    nameCountry.textContent = value.name;
    nameCountry.setAttribute('class', 'title-name');
    capitalCountry.textContent = `Capital: ${value.capital}`;
    languagesCountry.textContent = `Language(s): ${languagesArray}`;
    populationCountry.textContent = `Population: ${value.population}`;

    flagCountry.setAttribute('class', 'img-flag' );
    flagCountry.setAttribute('src', `${value.flag}`);

    mainList.appendChild(item);
    item.appendChild(nameCountry);
    item.appendChild(flagCountry);
    item.appendChild(capitalCountry);
    item.appendChild(languagesCountry);
    item.appendChild(populationCountry);
  }
};

createItemList(countriesMap);


let sortCreatedList = (item) => {
  cleanList(mainList);
  sortList(item);
  createItemList(item);
};

sortCreatedList(countriesMap);

let reverseCreatedList = (item) => {
  cleanList(mainList);
  reverseList(item);
  createItemList(item);

};

//to get value from input and filter values of properties
let filterProp;

document.querySelector('input').oninput = () => {
  cleanList(mainList);
  let inputValue = document.querySelector('input').value;

  filterProp = countries.filter(item =>
    item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
    item.capital.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.languages.map(item => item.name).join().toLowerCase().includes(inputValue.toLowerCase())
  );

  let lengthValueFilter = filterProp.length;
  if (lengthValueFilter === 0) {
    amount.textContent = '0';
  }

  createItemList(filterProp);
};


//click to btn
let ul = document.querySelector('.form__block-btns');
let btnName = document.querySelector('.btn_name');
let btnCapital = document.querySelector('.btn_capital');
let btnPopulation = document.querySelector('.btn_population');

ul.onclick = function (e) {
  e.preventDefault();

  if (e.target.closest('BUTTON') === btnName) {
    btnName.style.boxShadow = '0 0 10px 5px';
    btnCapital.style.boxShadow = 'none';
    btnPopulation.style.boxShadow = 'none';
    reverseCreatedList(filterProp);
    console.log(filterProp.name);
    btnName.classList.toggle('display-none');


  } else if (e.target.closest('BUTTON') === btnCapital) {
    btnCapital.style.boxShadow = '0 0 10px 5px';
    btnName.style.boxShadow = 'none';
    btnPopulation.style.boxShadow = 'none';
    reverseCreatedList(filterProp);


  } else if (e.target.closest('BUTTON') === btnPopulation) {
    btnPopulation.style.boxShadow = '0 0 10px 5px';
    btnName.style.boxShadow = 'none';
    btnCapital.style.boxShadow = 'none';
    reverseCreatedList(filterProp);
  }
};



// let sortCapital = (array) => array.map(item => item.capital);





//
//
// document.querySelector('.header__top').onclick = (e) => {
//   btnPopulation.style.boxShadow = 'none';
//   btnName.style.boxShadow = 'none';
//   btnCapital.style.boxShadow = 'none';
// };
//
// document.querySelector('.main__list').onclick = (e) => {
//   btnPopulation.style.boxShadow = 'none';
//   btnName.style.boxShadow = 'none';
//   btnCapital.style.boxShadow = 'none';
// };











