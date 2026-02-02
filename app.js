// Question no 1 ...

var itemsArray = [

    {

        name: "juice",
        price: "50",
        quantity: "3"
    },

    {

        name: "cookie",
        price: "30",
        quantity: "9"
    },

    {

        name: "shirt",
        price: "880",
        quantity: "1"
    },

    {

        name: "pen",
        price: "100",
        quantity: "2"
    },

];


for (var i = 0; i < itemsArray.length; i++) {


    var price1 = itemsArray[0].price * itemsArray[0].quantity
    var price2 = itemsArray[1].price * itemsArray[1].quantity
    var price3 = itemsArray[2].price * itemsArray[2].quantity
    var price4 = itemsArray[3].price * itemsArray[3].quantity

    var finalPrice = price1 + price2 + price3 + price3 + price4

    console.log(finalPrice)

}



// Question no 2 ...

var obj = {

    name: "Saad Mirza",
    email: "saadmirza@gmail.com",
    password: "saad12345",
    age: "25",
    gender: "male",
    city: "Karachi",
    country: "Pakistan"
}

console.log("age" in obj)
console.log("country" in obj)
console.log(obj.hasOwnProperty("FirstName"))
console.log(obj.hasOwnProperty("lastName"))


// Question no 3 ...

function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

const person1 = new Person("Alice", 28, "New York");
const person2 = new Person("Bob", 34, "London");
const person3 = new Person("Charlie", 22, "Tokyo");

console.log(person1, person2, person3);


// Question no 4 ...


// 1. Define the Constructor
function Resident(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

var form = document.getElementById('populationForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // 2. Capture values from the form
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const profession = document.getElementById('profession').value;

    // 3. Create a new record using the constructor
    const newRecord = new Resident(name, gender, address, education, profession);

    // 4. Bonus: Save to localStorage
    saveToStorage(newRecord);

    alert("Record Saved Successfully!");
    form.reset();
});

function saveToStorage(record) {
    // Get existing data or start fresh
    let population = JSON.parse(localStorage.getItem('populationData')) || [];

    // Add new record to the list
    population.push(record);

    // Save back to localStorage
    localStorage.setItem('populationData', JSON.stringify(population));
    console.log("Current Population List:", population);
}
