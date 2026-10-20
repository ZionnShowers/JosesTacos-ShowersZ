// Jose's Taco Truck
// The data is done. The page is not.

const truck = {
  name: "Jose's Taco Truck",
  tagline: "Same recipes, worse parking.",
  phone: "209-555-0147",
  soldOut: false
};

const special = {
  name: "Three birria tacos and a consome",
  price: 11.00,
  isFeatured: true
};

const schedule = [
  { day: "Monday", location: "Behind the laundromat on Pacific" },
  { day: "Tuesday", location: "Weber Ave, by the courthouse" },
  { day: "Wednesday", location: "Behind the laundromat on Pacific" },
  { day: "Thursday", location: "The lot on Hammer Lane" },
  { day: "Friday", location: "Victory Park, until we run out" }
];

const crew = ["Marisol", "Big Kevin", "Darnell"];

const todayIndex = 0;

// Your code goes below here.
console.log(document);


const heading = document.getElementById("truck-name");
console.log(heading);
heading.textContent = truck.name;

const tagline = document.getElementById("truck-tagline");
console.log(tagline);
tagline.textContent = truck.tagline;

const soldout = document.getElementById("truck-status");
console.log(soldout);
if (truck.soldOut == false)
{
  soldout.textContent = "Open now";
  soldout.classList.remove("closed");
}
else
{
  soldout.textContent = "Sold out for today";
  soldout.classList.add("closed");
}

const truckSpecial = document.getElementById("truck-special");
console.log(truckSpecial);
truckSpecial.textContent = special.name;
if (special.isFeatured == false)
{
  truckSpecial.classList.remove("featured");
}
else
{
  truckSpecial.classList.add("featured");
}

const truckSpecialPrice = document.getElementById("truck-special-price");
console.log(truckSpecialPrice);
function sum(num)
{
    return `$${num}`;    
}

truckSpecialPrice.textContent = sum(special.price)//


//DATES
// console.log(truckDay);
for (let i = 0; i < schedule.length; i++)
  {
  // const truckDay = document.getElementById("truck-day[i]");
  const truckDay = "day" + (i + 1);
  const elementDay = document.getElementById(truckDay);
  console.log(schedule[i].day);
  elementDay.textContent = schedule[i].day;

  const truckLoc = "loc" + (i + 1);
  const elementLoc = document.getElementById(truckLoc);
  console.log(schedule[i].location);
  elementLoc.textContent = schedule[i].location;
  
//DATE HIGHLIGHT
  if (todayIndex == i)
  {
    elementDay.classList.add("today");
    elementLoc.classList.add("today");
  }
  else
  {
    elementDay.classList.remove("today");
   elementLoc.classList.remove("today");
  }
}




//WHO'S WORKING

const truckCrew = document.getElementById("truck-crew");
console.log(truck-crew);
for (let i = 0; i < crew.length; i++) {
    const item = document.createElement("li")
    item.textContent = crew[i];
    truckCrew.appendChild(item)
}



//CALL
const truckCall = document.getElementById("truck-call");
console.log(truckCall);
truckCall.textContent = truck.phone;