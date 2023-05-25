// class User {
//   constructor(name, role, password) {
//     if (role !== "admin" && role !== "user") {
//       throw new Error('Invalid role. There are only "admin" and "user" roles');
//     }

//     this.name = name;
//     this.role = role;
//     this.password = password;
//     this.loggedin = true;
//   }

//   getName() {
//     return this.name;
//   }

//   getRole() {
//     return this.role;
//   }

//   login() {
//     return `${this.name} has logged in`;
//   }
//   logout() {
//     return `${this.name} has logged out`;
//   }

//   changeName(newName) {
//     const oldName = this.name;
//     this.name = newName;
//     return `${oldName}'s name has been changed to ${this.name}`;
//   }

//   changePassword(newPassword) {
//     this.password = newPassword;
//     return `${this.name}'s password has been changed`;
//   }
// }

// class Admin extends User {
//   constructor(name, password) {
//     super(name, "admin", password);
//     this.users = [];
//   }

//   addUser(user) {
//     this.users.push(user);
//   }

//   removeUser(user) {
//     const index = this.users.indexOf(user);
//     if (index !== -1) {
//       this.users.splice(index, 1);
//       console.log(`${user.getName()} has been removed.`);
//     } else {
//       console.log("User not found.");
//     }
//   }

//   changeUserRole(user, newRole) {
//     const index = this.users.indexOf(user);
//     if (index !== -1) {
//       user.role = newRole;
//     } else {
//       throw new Error("User not found.");
//     }
//   }

//   getAllUsers() {
//     return this.users;
//   }

//   removeAllUsers() {
//     this.users = [];
//   }
// }


// const admin = new Admin("Admin User");

// const user1 = new User("John", "user", "123");
// console.log(user1.changePassword("321"));
// console.log(user1.changeName("Johnathan"));
// console.log(user1.login());
// const user2 = new User("Jane", "user", "456");
// console.log(user2.changePassword("654"));
// console.log(user2.login());
// const user3 = new User("Jake", "user","678");
// console.log(user3.changePassword("876"));
// console.log(user3.login());
// const user4 = new User("Claudette", "user", "91011");
// console.log(user4.changePassword("11109"));
// console.log(user4.login());
// const user5 = new User("Dwight", "user", "121314");
// console.log(user5.changePassword("141312"));
// console.log(user5.login());

// admin.addUser(user1);
// admin.addUser(user2);
// admin.addUser(user3);
// admin.addUser(user4);
// admin.addUser(user5);

// const allUsers = admin.getAllUsers();
// console.log(allUsers);

// console.log(allUsers.indexOf(user5));

// const remainingUsers = admin.getAllUsers();
// console.log(remainingUsers);

// admin.changeUserRole(user5, "admin");

// console.log(user5.getRole());

// admin.removeAllUsers();

// const emptyUsers = admin.getAllUsers();
// console.log(emptyUsers);

// class WorldClock {
//   constructor(name) {
//     this.name = name;
//     this.clockElement = document.createElement('div');
//     this.clockElement.className = 'clock';
    
//     this.clockInfo = document.createElement('div');
//     this.clockInfo.className = 'clock-info';
    
//     this.clockName = document.createElement('h2');
//     this.clockName.textContent = this.name;
    
//     this.clockButtons = document.createElement('div');
//     this.clockButtons.className = 'clock-buttons';
    
//     this.dateButton = document.createElement('button');
//     this.dateButton.className = 'show-date';
//     this.dateButton.textContent = '';
//     this.dateButton.onclick = () => this.showDate();
    
//     this.dateTimeButton = document.createElement('button');
//     this.dateTimeButton.className = 'show-date-time';
//     this.dateTimeButton.textContent = '';
//     this.dateTimeButton.onclick = () => this.showDateTime();
    
//     this.deleteButton = document.createElement('button');
//     this.deleteButton.className = 'delete-clock';
//     this.deleteButton.textContent = '';
//     this.deleteButton.onclick = () => this.deleteClock();
    
//     this.clockButtons.appendChild(this.dateButton);
//     this.clockButtons.appendChild(this.dateTimeButton);
//     this.clockButtons.appendChild(this.deleteButton);
    
//     this.clockInfo.appendChild(this.clockName);
//     this.clockInfo.appendChild(this.clockButtons);
    
//     this.clockElement.appendChild(this.clockInfo);
    
//     document.getElementById('clocks').appendChild(this.clockElement);
//   }
  
//   getCurrentDate() {
//     const currentDate = new Date().toLocaleDateString();
//     alert(`Current date: ${currentDate}`);
//   }
  
//   getCurrentDateTime() {
//     const currentDateTime = new Date().toLocaleString();
//     alert(`Current date & time: ${currentDateTime}`);
//   }
  
//   deleteClock() {
//     this.clockElement.remove();
//   }
  
//   showDate() {
//     this.getCurrentDate();
//   }
  
//   showDateTime() {
//     this.getCurrentDateTime();
//   }
// }

// function createClock() {
//   const clockName = document.getElementById('clockName').value;
  
//   if (clockName) {
//     new WorldClock(clockName);
//     document.getElementById('clockName').value = '';
//   }
// }