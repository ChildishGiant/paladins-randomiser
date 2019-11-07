const champions = {
	"frontlines": [
		"Ash",
		"Atlas",
		"Barik",
		"Fernando",
		"Inara",
		"Khan",
		"Makoa",
		"Raum",
		"Ruckus",
		"Terminus",
		"Torvald"
	],

	"damage": [
		"Bomb King",
		"Cassie",
		"Dredge",
		"Drogoz",
		"Imani",
		"Kinessa",
		"Lian",
		"Sha Lin",
		"Strix",
		"Tyra",
		"Viktor",
		"Vivian",
		"Willo"
	],

	"support": [
		"Furia",
		"Grohk",
		"Grover",
		"Jenos",
		"Mal'Damba",
		"Pip",
		"Seris",
		"Ying",
		"Io"
	],

	"flank": [
		"Androxus",
		"Buck",
		"Evie",
		"Koga",
		"Lex",
		"Maeve",
		"Moji",
		"Skye",
		"Talus",
		"Zhin"
	]
};

function randomise() {

	let pool = [];

	Array.prototype.forEach.call(document.querySelectorAll("input"), (el, i) => {

		if (el.checked) {
			pool = pool.concat(champions[el.id]);
		}
	});

	// choose a champion from the pool
	const chosen = pool[Math.floor(Math.random() * pool.length)];
	switch (chosen) {

	case undefined:
		// Complain that no categories are checked
		document.getElementById("answer").innerHTML = "You need to select at least one category";

		// Set the image to nothing
		document.getElementById("profile").src = "imgs/champs/none.jpg";
		break;

	default:

		// Set the text to the correct champion
		document.getElementById("answer").innerHTML = chosen;

		// Setting the image
		document.getElementById("profile").src = `imgs/champs/${chosen.toLowerCase().replace(" ", "-")}.jpg`;
		break;
	}
}

(function () {
	randomise();
}());
