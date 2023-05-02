//First task:
// const textDiv = document.getElementById("text");
// const editor = document.getElementById("editor");

// editor.style.display = "none";

// document.addEventListener("keydown", (event) => {
//     if (event.ctrlKey && event.key === "e") {
//         event.preventDefault();
//         // Switch to edit mode
//         textDiv.style.display = "none";
//         editor.style.display = "block";
//         editor.value = textDiv.innerText.trim();
//         editor.focus();
//     } else if (event.ctrlKey && event.key === "s") {
//         event.preventDefault();
//         // Switch to view mode
//         textDiv.style.display = "block";
//         editor.style.display = "none";
//         textDiv.innerText = editor.value.trim();
//     }
// });

// Second task:

// const table = document.getElementById("myTable");
// 		const tbody = table.querySelector("tbody");
// 		const rows = Array.from(tbody.querySelectorAll("tr"));
// 		let ascending = true;
// 		let lastSortedIndex = null;

// 		const sortTable = (columnIndex) => {
// 			const sortFunction = (a, b) => {
// 				const aValue = a.children[columnIndex].textContent;
// 				const bValue = b.children[columnIndex].textContent;
// 				if (!isNaN(parseFloat(aValue)) && !isNaN(parseFloat(bValue))) {
// 					return parseFloat(aValue) - parseFloat(bValue);
// 				} else {
// 					return aValue.localeCompare(bValue);
// 				}
// 			};
// 			rows.sort(sortFunction);
// 			if (!ascending) {
// 				rows.reverse();
// 			}
// 			lastSortedIndex = columnIndex;
// 			ascending = !ascending;
// 			rows.forEach((row) => tbody.appendChild(row));
// 		};

// 		table.addEventListener("click", (event) => {
// 			if (event.target.tagName === "TH") {
// 				const columnIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
// 				if (columnIndex !== lastSortedIndex) {
// 					sortTable(columnIndex);
// 				} else {
// 					rows.reverse();
// 					rows.forEach((row) => tbody.appendChild(row));
// 					ascending = !ascending;
// 				}
// 			}
// 		});

// third task:
// const frame = document.getElementById("frame");
// 		let startX, startY, startWidth, startHeight;

// 		const startResize = (event) => {
// 			event.preventDefault();
// 			startX = event.clientX;
// 			startY = event.clientY;
// 			startWidth = parseInt(document.defaultView.getComputedStyle(frame).width, 10);
// 			startHeight = parseInt(document.defaultView.getComputedStyle(frame).height, 10);
// 			document.documentElement.addEventListener("mousemove", doResize);
// 			document.documentElement.addEventListener("mouseup", stopResize);
// 		};

// 		const doResize = (event) => {
// 			const width = startWidth + event.clientX - startX;
// 			const height = startHeight + event.clientY - startY;
// 			frame.style.width = width + "px";
// 			frame.style.height = height + "px";
// 		};

// 		const stopResize = (event) => {
// 			document.documentElement.removeEventListener("mousemove", doResize);
// 			document.documentElement.removeEventListener("mouseup", stopResize);
// 		};

// 		frame.addEventListener("mousedown", (event) => {
// 			if (event.target === frame) {
// 				startResize(event);
// 			}
// 		});