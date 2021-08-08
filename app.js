document.write("ANSWER NO 1" + "<br></br>")

let Arrayitems = [
    {name: 'Juice', price: 70, quantity: 5 },
    {name: 'Shirts', price: 500, quantity: 3 },
    {name: 'Cookies', price: 45, quantity: 8 },
    {name: 'Pens', price: 80, quantity: 6 },
];
let Juice = Arrayitems[0].price * Arrayitems[0].quantity;
let Shirts = Arrayitems[1].price * Arrayitems[1].quantity;
let Cookies = Arrayitems[2].price * Arrayitems[2].quantity;
let Pens = Arrayitems[3].price * Arrayitems[3].quantity;

document.write("Total price of 'Juice' is : " + Juice + "<br></br>");
document.write("Total price of 'Shirts' is : " + Shirts + "<br> </br>");
document.write("Total price of 'Cookies' is : " + Cookies + "<br> </br>");
document.write("Total price of 'Pens' is : " + Pens + "<br> </br>");
document.write("Total price of items is : " + (Juice + Shirts + Cookies + Pens + "<br></br>"));

document.write("ANSWER NO 2" + "<br></br>")

let obj = {
    username: "Hassan",
    email: "ha371872@gmail.com",
    password: "syedhassan",
    gender: "male",
    age: 21,
    city: "karachi",
    country: "pakistan"
}
if("firstName" in obj) {
    document.write("firstName property exists in object" + "<br> <br>")
} else {
    document.write("firstName property does not exists in object" + "<br> <br>")
}
if("lastName" in obj) {
    document.write("lastName property exists in object" + "<br> <br>")
} else {
    document.write("lastName property does not exists in object" + "<br> <br>")
}
if("age" in obj) {
    document.write("age property exists in object" + "<br> <br>")
} else {
    document.write("age property does not exists in object" + "<br> <br>")
}
if("country" in obj) {
    document.write("country property exists in object" + "<br> <br>")
} else {
    document.write("country property does not exists in object" + "<br> <br>")
}

document.write("ANSWER NO 3" + "<br></br>")

function Plan (name, cast, age, gender) {
    this.name = name
    this.cast = cast
    this.age = age
    this.gender = gender
  }
  let Hassan = new Plan("Hassan", "Syed", 21, "male");
  let Zoha = new Plan("Zoha", "Syed", 18, "female");
  let Waleed = new Plan("Waleed", "Qureshi", 22, "male");
  document.write("First function made from constructor <br><br>")
  for(let key in Hassan) {
    document.write(key + " : " + Hassan[key] + "<br><br>");
  }
  document.write("Second function made from constructor <br><br>")
  for(let key in Zoha) {
    document.write(key + " : " + Zoha[key] + "<br><br>");
  }
  document.write("Third function made from constructor <br><br>")
  for(let key in Waleed) {
    document.write(key + " : " + Waleed[key] + "<br><br>");
  }
  
  document.write("ANSWER NO 4" + "<br></br>")


