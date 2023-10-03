const url = "https://reqres.in/api/users?per_page=12"
const div = document.getElementById("root");
let OpenPopup = null;

function closePopup() {
	if (OpenPopup)
		OpenPopup.style.display = "none";
}

function createPopup(user) {
	const popup = document.createElement("div");
	popup.setAttribute("class", "popup");

	popup.innerHTML = `
		<img class="img" src="${user.avatar}" alt="avatar">
		<p class="name">${user.first_name} ${user.last_name}</p>
		<a href="mailto:${user.email}" id="mailUser">${user.email}</a>`

	const buttonClose = document.createElement("button");
	buttonClose.textContent = "Fermer";
	buttonClose.addEventListener("click", () => {
		popup.style.display = "none";
	});
	popup.appendChild(buttonClose);

	return popup;
}

function recup () {
	fetch (url)
	.then (response => response.json())
	
	.then (data => {
		console.log(data);
		data.data.forEach( function (userData) {
			const usersElement = document.createElement("div");
			usersElement.setAttribute("id", "user");
			usersElement.innerHTML = `
			<img class="img" src="${userData.avatar}" alt="avatar">
			<p class="name">${userData.first_name} ${userData.last_name}</p>
			<a href="mailto:${userData.email}" id="mailUser">${userData.email}</a>`;

			const popupUsers = createPopup(userData);
			usersElement.addEventListener("click", () => {
				closePopup();
				popupUsers.style.display = "block";
				OpenPopup = popupUsers;
			} )

			div.appendChild(usersElement);
			document.body.appendChild(popupUsers);
		});
	});
}

recup();


