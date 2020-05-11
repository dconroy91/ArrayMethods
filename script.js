// const businesses = [
//     {
//       purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
//       phoneWork: "089.129.2290 x9400",
//       orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
//       companyName: "Care-media",
//       companyIndustry: "Education",
//       addressZipCode: "56839",
//       addressStateCode: "WI",
//       addressFullStreet: "8417 Franklin Court Tunnel",
//       addressCity: "Mouthcard"
//     },
//     {
//       purchasingAgent: { nameLast: "Steuber", nameFirst: "Kamron" },
//       phoneWork: "(833) 222-7579 x5874",
//       orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
//       companyName: "Stanholding",
//       companyIndustry: "Hospitality",
//       addressZipCode: "09705",
//       addressStateCode: "NY",
//       addressFullStreet: "2889 Fawn Court Garden",
//       addressCity: "Fellsmere"
//     },
//     {
//       purchasingAgent: { nameLast: "Gutkowski", nameFirst: "Kaylee" },
//       phoneWork: "235.266.6278",
//       orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
//       companyName: "Highnix",
//       companyIndustry: "Agriculture",
//       addressZipCode: "49376",
//       addressStateCode: "ME",
//       addressFullStreet: "5734 Maple Avenue Throughway",
//       addressCity: "Little Genesee"
//     },
//     {
//       purchasingAgent: { nameLast: "Crona", nameFirst: "Lauren" },
//       phoneWork: "1-449-987-3083 x23263",
//       orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
//       companyName: "Conit",
//       companyIndustry: "Defense",
//       addressZipCode: "53326",
//       addressStateCode: "IL",
//       addressFullStreet: "5755 Hillside Drive Crossroad",
//       addressCity: "Norval"
//     },
//     {
//       purchasingAgent: { nameLast: "Krajcik", nameFirst: "Elvera" },
//       phoneWork: "1-730-411-8580",
//       orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
//       companyName: "Dong-tom",
//       companyIndustry: "Energy",
//       addressZipCode: "67071",
//       addressStateCode: "KS",
//       addressFullStreet: "4826 Arch Street Lights",
//       addressCity: "Newburyport"
//     },
//     {
//       purchasingAgent: { nameLast: "Kling", nameFirst: "Ellie" },
//       phoneWork: "(868) 043-0950",
//       orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
//       companyName: "Dan-dox",
//       companyIndustry: "Manufacturing",
//       addressZipCode: "98842",
//       addressStateCode: "WV",
//       addressFullStreet: "9767 Cedar Court Corner",
//       addressCity: "Prince George"
//     },
//     {
//       purchasingAgent: { nameLast: "Robel", nameFirst: "Otilia" },
//       phoneWork: "(298) 305-1942 x53653",
//       orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
//       companyName: "J-base",
//       companyIndustry: "Health care",
//       addressZipCode: "72993",
//       addressStateCode: "FL",
//       addressFullStreet: "9954 Buckingham Drive Mountains",
//       addressCity: "Vesper"
//     },
//     {
//       purchasingAgent: { nameLast: "Gusikowski", nameFirst: "Karolann" },
//       phoneWork: "(743) 934-8981 x692",
//       orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
//       companyName: "Span-fix",
//       companyIndustry: "Construction",
//       addressZipCode: "59860",
//       addressStateCode: "MT",
//       addressFullStreet: "4151 Orange Street Extension",
//       addressCity: "Little Rock Air Force Base"
//     },
//     {
//       purchasingAgent: { nameLast: "Hartmann", nameFirst: "Zena" },
//       phoneWork: "727.635.6610 x6483",
//       orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
//       companyName: "Sanaplane",
//       companyIndustry: "Information",
//       addressZipCode: "85156",
//       addressStateCode: "NY",
//       addressFullStreet: "4765 Fairview Avenue Locks",
//       addressCity: "Dennisville"
//     },
//     {
//       purchasingAgent: { nameLast: "Torphy", nameFirst: "Celia" },
//       phoneWork: "(992) 079-1670 x71569",
//       orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
//       companyName: "Ran-taxon",
//       companyIndustry: "Manufacturing",
//       addressZipCode: "96673",
//       addressStateCode: "MD",
//       addressFullStreet: "7157 Hudson Street Ford",
//       addressCity: "Watrous"
//     }
//   ];


//   const outputContainer = document.querySelector("#output")

//   outputContainer.innerHTML = "<h1>Active Businesses</h1>"

//   businesses.forEach(singleBusiness => {
//      outputContainer.innerHTML += `<h2>${singleBusiness.companyName}</h2>
//      <p>${singleBusiness.addressFullStreet}</p>`
//   })


//   const newYorkBusinessArray = businesses.filter(singleBusiness => singleBusiness.addressStateCode ==="NY")
// //   console.log(newYorkBusinessArray)

//   const manufacturingArray = businesses.filter(singleBusiness => singleBusiness.companyIndustry ==="Manufacturing")
//   console.log(manufacturingArray)


//make array that has manufacturing as industry and display to dom
//   manufacturingArray.forEach(singleBusiness => {
//       outputContainer.innerHTML += `<h1>${singleBusiness.companyName}</h1>
//       <p>${singleBusiness.addressFullStreet}</p>`
//   })

  //map method

//   const purchasingAgentArray = businesses.map(singleBusiness => {
//      return {
//          fullName: `${singleBusiness.purchasingAgent.nameFirst} ${singleBusiness.purchasingAgent.nameLast}`,
//          companyName: singleBusiness.companyName,
//          phoneWork: singleBusiness.phoneWork
//      };
//     });
//   console.log(purchasingAgentArray)
//   purchasingAgentArray.forEach(x => {
//       outputContainer.innerHTML += `<h1>${x.companyName}</h1>
//       <p>${x.fullName}</p>
//       <p>${x.phoneWork}</p>
//       <hr>`
//   })

//reduce method

// const arrayOfNumbers = [11, 22, 33, 58, 98, 34]
// let total = 0
// arrayOfNumbers.forEach(number => {
// total += number
// })
// console.log(total)

// const addedArrayTotal = arrayOfNumbers.reduce((numbersTotal, currentValue) => numbersTotal += currentValue,)

// console.log(addedArrayTotal)

// const greetingArray = ["HI", "MY", "NAME", "IS", "DEVIN"]

// const greetingSentence = greetingArray.reduce((finishedSentence, currentValue) => finishedSentence += `${currentValue} `,"")
// console.log(greetingSentence)

// ightning Exercise 4: Use the reduce method on the following array to determine how much total rain fell last month.
// const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]
// const totalRainfall = monthlyRainfall.reduce()
// console.log(totalRainfall)

// const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]
// const totalRainfall = monthlyRainfall.reduce((addedRainfall, currentValue) =>
// addedRainfall += currentValue)
// console.log(totalRainfall)

// Lightning Exercise 5: Use the reduce method on the following array to build a sentence.
// const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
// const sentence = words.reduce()
// console.log(sentence)

// const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
// const sentence = words.reduce((addedWords, currentValue) => 
// addedWords += `${currentValue} `,"")
// console.log(sentence)

// // sort method

// const ascedningArray = monthlyRainfall.sort((a,b) => a > b ? 1:-1)
// console.log(ascedningArray)

// const descendingArray = monthlyRainfall.sort((a,b) => a< b ? 1:-1)
// console.log(descendingArray)


// // Array to contain all the big spenders

// const bigSpenders = businesses.filter(business => {
//     if (business.orders.some(singleOrder => singleOrder > 9000)){
//         return business
//     }
    
// })
// console.log (bigSpenders)


const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

planets.forEach(dildo => {
    planetEl.innerHTML += `<h1>${dildo}</h1>`
})

const upperPlanets = planets.map(function(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
})
console.log(upperPlanets)
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const craziness = integers.sort((a, b) => a > b ? 1:-1)
console.log (craziness)