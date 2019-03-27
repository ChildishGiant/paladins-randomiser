/* globals $ */

const champions = {
	"frontlines": [
		"Ash",
		"Atlas",
		"Barik",
		"Fernando",
		"Inara",
		"Khan",
		"Makoa",
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
		"Ying"
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
	],
};

function randomise() {

	let pool = [];

	$("input").each(function () {

		if (this.checked) {
			pool = pool.concat(champions[this.id]);
		}

	});

	// choose a champion from the pool
	const chosen = pool[Math.floor(Math.random() * pool.length)];
	switch (chosen) {

	case undefined:
		// Complain that no categories are checked
		$("#answer").html("You need to select at least one category");

		// Set the image to nothing
		$("#profile").attr("src", "imgs/champs/none.jpg");
		break;

	default:

		// Set the text to the correct champion
		$("#answer").html(chosen);

		// Setting the image
		$("#profile").attr("src", `imgs/champs/${chosen.toLowerCase().replace(" ", "-")}.jpg`);
		break;
	}


	// if (chosen === undefined) {

	// 	// Complain that no categories are checked
	// 	$("#answer").html("You need to select at least one category");

	// 	// Set the image to nothing
	// 	$("#profile").attr("src", "imgs/110px-Champion_None_Icon.png");

	// } else {

	// 	// Set the text to the correct champion
	// 	$("#answer").html(chosen);

	// 	// Setting the image
	// 	const url = `imgs/champs/${chosen.toLowerCase().replace(" ", "-")}.jpg`;
	// 	$("#profile").attr("src", url);

	// }
}

$(document).ready(() => {
	randomise();
});
