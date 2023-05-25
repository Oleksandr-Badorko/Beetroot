// class Circle {
//   constructor(radius) {
//     this._radius = radius;
//   }

//   get radius() {
//     return this._radius;
//   }

//   set radius(value) {
//     if (value >= 0) {
//       this._radius = value;
//     } else {
//       throw new Error("Radius cannot be negative.");
//     }
//   }

//   get diameter() {
//     return this._radius * 2;
//   }

//   area() {
//     return Math.PI * Math.pow(this._radius, 2);
//   }

//   circumference() {
//     return 2 * Math.PI * this._radius;
//   }
// }

// const circle = new Circle(5);
// console.log(circle.radius);
// console.log(circle.diameter);
// console.log(circle.area());
// console.log(circle.circumference());

// circle.radius = 7;
// console.log(circle.radius);
// console.log(circle.diameter);
// console.log(circle.area());
// console.log(circle.circumference());

// class StationeryMarker {
//   constructor(colour, inkAmount) {
//     this.colour = colour;
//     this.inkAmount = inkAmount;
//   }

//   write(text) {
//     const characters = text.replace(/\s/g, "");
//     const inkRequired = characters.length * 0.5;

//     if (inkRequired <= this.inkAmount) {
//       console.log(`Writing in ${this.colour}: ${text}`);
//       this.inkAmount -= inkRequired;
//     } else {
//       console.log(`Not enough ink to write: ${text}`);
//     }
//   }
// }

// class RefillableMarker extends StationeryMarker {
//   refill(inkAmount) {
//     this.inkAmount += inkAmount;
//     console.log(`Marker refilled. Current ink amount: ${this.inkAmount}`);
//   }
// }

// const marker = new StationeryMarker("blue", 50);
// marker.write("Hello, world!");

// const refillableMarker = new RefillableMarker("green", 10);
// refillableMarker.write("I cannot display this text.");
// refillableMarker.refill(20);
// refillableMarker.write("I can display the text.");

// class Employee {
//     constructor(id, name, position) {
//       this.id = id;
//       this.name = name;
//       this.position = position;
//     }
//   }

//   class EmpTable {
//     constructor(employees) {
//       this.employees = employees;
//     }

//     getHtml() {
//       let html = '<table>';
//       html += '<tr><th>ID</th><th>Name</th><th>Position</th></tr>';

//       this.employees.forEach((employee) => {
//         html += `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${employee.position}</td></tr>`;
//       });

//       html += '</table>';

//       return html;
//     }
//   }

//   const bankEmployees = [
//     new Employee(1, 'John Doe', 'Manager'),
//     new Employee(2, 'Jane Smith', 'Teller'),
//     new Employee(3, 'Mike Johnson', 'Loan Officer'),
//   ];

//   const empTable = new EmpTable(bankEmployees);
//   const htmlCode = empTable.getHtml();
//   document.getElementById('employeeTable').innerHTML = htmlCode;
