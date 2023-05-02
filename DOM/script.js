// first js

// let playList = [
//   {
//     author: "LED ZEPPELIN",
//     song: "STAIRWAY TO HEAVEN"
//   },
//   {
//     author: "QUEEN",
//     song: "BOHEMIAN RHAPSODY"
//   },
//   {
//     author: "LYNYRD SKYNYRD",
//     song: "FREE BIRD"
//   },
//   {
//     author: "DEEP PURPLE",
//     song: "SMOKE ON THE WATER"
//   },
//   {
//     author: "JIMI HENDRIX",
//     song: "ALL ALONG THE WATCHTOWER"
//   },
//   {
//     author: "AC/DC",
//     song: "BACK IN BLACK"
//   },
//   {
//     author: "QUEEN",
//     song: "WE WILL ROCK YOU"
//   },
//   {
//     author: "METALLICA",
//     song: "ENTER SANDMAN"
//   }
// ];

// // Get the ordered list element from the DOM
// let playlistEl = document.getElementById("playlist");

// // Loop through the playlist array and create list items
// for (let i = 0; i < playList.length; i++) {
//   // Create a new list item element for each song
//   let listItemEl = document.createElement("li");

//   // Set the text of the list item to the song and artist
//   listItemEl.textContent = playList[i].song + " by " + playList[i].author;

//   // Add the list item to the ordered list
//   playlistEl.appendChild(listItemEl);
// }

// second js

// let modal = document.getElementById("myModal");

// let closeBtn = document.getElementsByClassName("custom-close-button")[0];

// function openModal() {
//   modal.style.display = "block";
// }

// function closeModal() {
//   modal.style.display = "none";
// }

// window.onclick = function (event) {
//   if (event.target == modal) {
//     closeModal();
//   }
// };

// third js

// let presentColor = 0;
// const colors = ["red", "yellow", "green"];

// function changeColor() {
//   presentColor = (presentColor + 1) % colors.length;
//   const trafficLight = document.querySelector(".traffic-light");
//   const color = colors[presentColor];

//   switch (color) {
//     case "red":
//       trafficLight.querySelector(".red").style.backgroundColor = "red";
//       trafficLight.querySelector(".yellow").style.backgroundColor = "black";
//       trafficLight.querySelector(".green").style.backgroundColor = "black";
//       break;
//     case "yellow":
//       trafficLight.querySelector(".red").style.backgroundColor = "black";
//       trafficLight.querySelector(".yellow").style.backgroundColor = "yellow";
//       trafficLight.querySelector(".green").style.backgroundColor = "black";
//       break;
//     case "green":
//       trafficLight.querySelector(".red").style.backgroundColor = "black";
//       trafficLight.querySelector(".yellow").style.backgroundColor = "black";
//       trafficLight.querySelector(".green").style.backgroundColor = "green";
//       break;
//   }
// }