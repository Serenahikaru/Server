'use strict';

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// SM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "SM Singles (beta)",
	},
	{
		name: "[Gen 7] Random Battle",
		desc: ["Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable."],

		mod: 'gen7',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Unrated Random Battle",

		mod: 'gen7',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587188/\">OU Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587177/\">OU Banlist</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Baton Pass Clause'],
		banlist: ['Uber', 'Power Construct', 'Shadow Tag'],
	},
	{
		name: "[Gen 7] Ubers",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3587184/\">Ubers Metagame Discussion</a>"],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 7] UU (beta)",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3591786/\">UU Metagame Discussion</a>"],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU'],
		banlist: ['OU', 'BL', 'Power Construct', 'Baton Pass'],
	},
	{
		name: "[Gen 7] RU (alpha)",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3587352/\">RU Metagame Discussion</a>"],

		mod: 'gen7',
		ruleset: ['[Gen 7] UU (beta)'],
		banlist: [
			'Amoonguss', 'Azumarill', 'Azelf', 'Bewear', 'Bisharp', 'Blissey', 'Breloom', 'Cobalion', 'Conkeldurr', 'Decidueye', 'Dhelmise',
			'Diggersby', 'Dragonite', 'Empoleon', 'Forretress', 'Gengar', 'Gigalith', 'Gliscor', 'Gyarados', 'Hippowdon', 'Hydreigon',
			'Infernape', 'Jirachi', 'Keldeo', 'Krookodile', 'Latias', 'Magneton', 'Mamoswine', 'Mandibuzz', 'Mew', 'Muk-Alola', 'Necrozma',
			'Porygon-Z', 'Primarina', 'Raikou', 'Salamence', 'Scizor', 'Serperior', 'Starmie', 'Staraptor', 'Sylveon', 'Tentacruel',
			'Terrakion', 'Thundurus', 'Tornadus-Therian', 'Tsareena', 'Victini', 'Volcanion', 'Volcarona', 'Weavile', 'Zygarde-10%',
			'Aerodactylite', 'Blastoisinite', 'Sharpedonite', 'Slowbronite',
		],
	},
	{
		name: "[Gen 7] LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587196/\">LC Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/sm/formats/lc/\">LC Banlist</a>",
		],

		mod: 'gen7',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Little Cup'],
		banlist: ['Cutiefly', 'Drifloon', 'Gligar', 'Gothita', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Yanma', 'Eevium Z', 'Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 7] Anything Goes",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3587441/\">Anything Goes</a>"],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased'],
	},
	{
		name: "[Gen 7] CAP",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587865/\">CAP Metagame Discussion</a>",
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU'],
		banlist: ['Allow CAP'],
	},
	{
		name: "[Gen 7] Battle Spot Singles",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587473/\">Battle Spot Singles Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587201/\">Battle Spot Singles Viability Ranking</a>",
		],

		mod: 'gen7',
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "[Gen 7] Battle Spot Special 2",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3592974/\">Battle Spot Special</a>"],

		mod: 'gen7',
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased', 'Soul Dew', 'Battle Bond'],
		onValidateTeam: function (team) {
			let special = {'Mewtwo':1, 'Mew':1, 'Lugia':1, 'Ho-Oh':1, 'Celebi':1, 'Kyogre':1, 'Groudon':1, 'Rayquaza':1, 'Jirachi':1, 'Deoxys':1, 'Dialga':1, 'Palkia':1, 'Giratina':1, 'Phione':1, 'Manaphy':1, 'Darkrai':1, 'Shaymin':1, 'Arceus':1, 'Victini':1, 'Reshiram':1, 'Zekrom':1, 'Kyurem':1, 'Keldeo':1, 'Meloetta':1, 'Genesect':1, 'Xerneas':1, 'Yveltal':1, 'Zygarde':1, 'Diancie':1, 'Hoopa':1, 'Volcanion':1, 'Cosmog':1, 'Cosmoem':1, 'Solgaleo':1, 'Lunala':1, 'Necrozma':1, 'Magearna':1};
			let hasSpecial = false;
			for (let i = 0; i < team.length; i++) {
				let template = this.getTemplate(team[i].species);
				if (template.baseSpecies in special) {
					if (hasSpecial) return ["Only one of the following can be used per team: Mewtwo, Mew, Lugia, Ho-Oh, Celebi, Kyogre, Groudon, Rayquaza, Jirachi, Deoxys, Dialga, Palkia, Giratina, Phione, Manaphy, Darkrai, Shaymin, Arceus, Victini, Reshiram, Zekrom, Kyurem, Keldeo, Meloetta, Genesect, Xerneas, Yveltal, Zygarde, Diancie, Hoopa, Volcanion, Cosmog, Cosmoem, Solgaleo, Lunala, Necrozma, Magearna."];
					hasSpecial = true;
				}
			}
		},
	},
	{
		name: "[Gen 7] Alola Friendly",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3591710/\">Alola Friendly</a>"],

		mod: 'gen7',
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod', 'Alola Pokedex'],
		banlist: ['Illegal', 'Unreleased', 'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zygarde', 'Mega'],
		requirePentagon: true,
	},
	{
		name: "[Gen 7] Custom Game",

		mod: 'gen7',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// SM Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "SM Doubles (beta)",
	},
	{
		name: "[Gen 7] Random Doubles Battle",

		mod: 'gen7',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Doubles OU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3586596/\">Doubles OU Metagame Discussion</a>"],

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview'],
		banlist: ['Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia',
			'Lunala', 'Magearna', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Power Construct', 'Eevium Z', 'Dark Void', 'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder',
		],
	},
	{
		name: "[Gen 7] Doubles Ubers",

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased'],
	},
	{
		name: "[Gen 7] VGC 2017",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3586596/\">VGC 2017 Discussion</a>"],

		mod: 'gen7',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod', 'Alola Pokedex'],
		banlist: ['Illegal', 'Unreleased', 'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zygarde', 'Mega'],
		requirePentagon: true,
	},
	{
		name: "[Gen 7] Battle Spot Doubles",

		mod: 'gen7',
		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "[Gen 7] Doubles Custom Game",

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// ORAS Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "ORAS Singles",
	},
	{
		name: "OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3573990/\">OU Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ou/\">OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3571990/\">OU Viability Ranking</a>",
		],

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Shadow Tag', 'Soul Dew'],
	},
	{
		name: "Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3522911/\">Ubers Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535106/\">Ubers Viability Ranking</a>",
		],

		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Clause'],
	},
	{
		name: "UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3582473/\">np: UU Stage 7.3</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/uu/\">UU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3555277/\">UU Viability Ranking</a>",
		],

		ruleset: ['OU'],
		banlist: ['OU', 'BL', 'Drizzle', 'Drought', 'Baton Pass'],
	},
	{
		name: "RU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3583022/\">np: RU Stage 19</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ru/\">RU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558546/\">RU Viability Ranking</a>",
		],

		ruleset: ['OU'],
		banlist: ['OU', 'BL', 'UU', 'BL2', 'Drizzle', 'Drought'],
	},
	{
		name: "NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3576747/\">np: NU Stage 15</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/nu/\">NU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3555650/\">NU Viability Ranking</a>",
		],

		ruleset: ['RU', 'Baton Pass Speed Clause'],
		banlist: ['RU', 'BL3'],
	},
	{
		name: "PU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3578583/\">np: PU Stage 9</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3528743/\">PU Viability Ranking</a>",
		],

		ruleset: ['RU'],
		banlist: ['RU', 'BL3', 'NU', 'BL4', 'Chatter'],
	},
	{
		name: "LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3505710/\">LC Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/formats/lc/\">LC Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547566/\">LC Viability Ranking</a>",
		],

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['LC Uber', 'Gligar', 'Misdreavus', 'Scyther', 'Sneasel', 'Tangela', 'Dragon Rage', 'Sonic Boom', 'Swagger'],
	},
	{
		name: "CAP",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3537407/\">CAP Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/formats/cap/\">CAP Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545628/\">CAP Viability Ranking</a>",
		],

		ruleset: ['OU'],
		banlist: ['Allow CAP'],
	},
	{
		name: "Battle Spot Singles",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3527960/\">Battle Spot Singles Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3554616/\">Battle Spot Singles Viability Ranking</a>",
		],

		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "[Gen 6] Random Battle",

		team: 'random',
		searchShow: false,
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Custom Game",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// ORAS Doubles/Triples
	///////////////////////////////////////////////////////////////////

	{
		section: "ORAS Doubles/Triples",
	},
	{
		name: "Doubles OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3580680/\">np: Doubles OU Stage 5</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3498688/\">Doubles OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535930/\">Doubles OU Viability Ranking</a>",
		],

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Swagger Clause', 'Team Preview'],
		banlist: [
			'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Salamencite', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom', 'Soul Dew',
			'Dark Void', 'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder',
		],
	},
	{
		name: "Doubles Ubers",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542746/\">Doubles Ubers</a>"],

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Dark Void'],
	},
	{
		name: "Doubles UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542755/\">Doubles UU</a>"],

		gameType: 'doubles',
		ruleset: ['Doubles OU'],
		banlist: [
			'Aegislash', 'Amoonguss', 'Arcanine', 'Azumarill', 'Bisharp', 'Breloom', 'Charizard-Mega-Y', 'Charizardite Y',
			'Conkeldurr', 'Cresselia', 'Diancie-Mega', 'Diancite', 'Ferrothorn', 'Garchomp', 'Gardevoir-Mega', 'Gardevoirite',
			'Gastrodon', 'Gengar', 'Greninja', 'Heatran', 'Hitmontop', 'Hoopa-Unbound', 'Hydreigon', 'Jirachi',
			'Kangaskhan-Mega', 'Kangaskhanite', 'Keldeo', 'Kyurem-Black', 'Landorus-Therian', 'Latios', 'Ludicolo', 'Milotic',
			'Politoed', 'Raichu', 'Rotom-Wash', 'Scizor', 'Scrafty', 'Shaymin-Sky', 'Suicune', 'Sylveon', 'Talonflame',
			'Terrakion', 'Thundurus', 'Togekiss', 'Tyranitar', 'Venusaur', 'Volcanion', 'Weavile', 'Whimsicott', 'Zapdos',
		],
	},
	{
		name: "VGC 2016",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558332/\">VGC 2016 Rules</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3580592/\">VGC 2016 Viability Ranking</a>",
		],

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: [
			'Illegal', 'Unreleased', 'Mew', 'Celebi', 'Jirachi', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Phione', 'Manaphy', 'Darkrai',
			'Shaymin', 'Shaymin-Sky', 'Arceus', 'Victini', 'Keldeo', 'Meloetta', 'Genesect', 'Diancie', 'Hoopa', 'Hoopa-Unbound', 'Volcanion', 'Soul Dew',
		],
		requirePentagon: true,
		onValidateTeam: function (team) {
			const legends = {'Mewtwo':1, 'Lugia':1, 'Ho-Oh':1, 'Kyogre':1, 'Groudon':1, 'Rayquaza':1, 'Dialga':1, 'Palkia':1, 'Giratina':1, 'Reshiram':1, 'Zekrom':1, 'Kyurem':1, 'Xerneas':1, 'Yveltal':1, 'Zygarde':1};
			let n = 0;
			for (let i = 0; i < team.length; i++) {
				let template = this.getTemplate(team[i].species).baseSpecies;
				if (template in legends) n++;
				if (n > 2) return ["You can only use up to two legendary Pok\u00E9mon."];
			}
		},
	},
	{
		name: "Battle Spot Doubles",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3560820/\">Battle Spot Doubles Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3560824/\">Battle Spot Doubles Viability Ranking</a>",
		],

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "[Gen 6] Random Doubles Battle",

		gameType: 'doubles',
		team: 'random',
		searchShow: false,
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Doubles Custom Game",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		name: "Battle Spot Triples",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533914/\">Battle Spot Triples Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3549201/\">Battle Spot Triples Viability Ranking</a>",
		],

		gameType: 'triples',
		maxForcedLevel: 50,
		teamLength: {
			validate: [6, 6],
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "Triples Custom Game",

		gameType: 'triples',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "OM of the Month",
		column: 2,
	},
	{
		name: "[Gen 7] Balanced Hackmons",

		mod: 'gen7',
		ruleset: ['Pokemon', 'Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Arena Trap', 'Huge Power', 'Moody', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Wonder Guard', 'Chatter', 'Extreme Evoboost'],
	},
	{
		name: "[Gen 7] Pokébilities",
		desc: [
			"Pok&eacute;mon have all their natural abilities at the same time.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3588652/\">Pokébilities</a>",
		],

		mod: 'pokebilities',
		ruleset: ['[Gen 7] OU', 'Evasion Abilities Clause'],
		banlist: ['Excadrill'],
		onBegin: function () {
			let banlistTable = this.getBanlistTable(this.getFormat('gen7pokbilities'));
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				if (pokemon.ability === 'battlebond') {
					pokemon.innates = [];
					continue;
				}
				pokemon.innates = Object.keys(pokemon.template.abilities).filter(key => key !== 'S' && (key !== 'H' || !pokemon.template.unreleasedHidden)).map(key => toId(pokemon.template.abilities[key])).filter(ability => ability !== pokemon.ability && !banlistTable[ability]);
			}
		},
		onSwitchInPriority: 1,
		onSwitchIn: function (pokemon) {
			pokemon.innates.forEach(innate => pokemon.addVolatile("other" + innate, pokemon));
		},
		onAfterMega: function (pokemon) {
			pokemon.innates.forEach(innate => pokemon.removeVolatile("other" + innate, pokemon));
			pokemon.innates = [];
		},
	},
	{
		name: "[Gen 7] 350 Cup",
		desc: [
			"Pok&eacute;mon with a base stat total of 350 or lower get their stats doubled.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3589641/\">350 Cup</a>",
		],

		mod: '350cup',
		searchShow: false,
		ruleset: ['[Gen 7] Ubers'],
		banlist: ['Deep Sea Tooth', 'Eevium Z', 'Eviolite', 'Light Ball'],
	},
	{
		name: "STABmons",
		desc: [
			"Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547279/\">STABmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558034/\">STABmons Viability Ranking</a>",
		],

		ruleset: ['OU'],
		banlist: ['Ignore STAB Moves', 'Diggersby', 'Kyurem-Black', 'Porygon-Z', 'Thundurus', 'Aerodactylite', 'Altarianite', "King's Rock", 'Metagrossite', 'Razor Fang'],
	},
	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "Anything Goes",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3523229/\">Anything Goes</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3548945/\">AG Resources</a>",
		],

		ruleset: ['Pokemon', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased'],
	},
	{
		name: "Balanced Hackmons",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3489849/\">Balanced Hackmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3566051/\">BH Suspects and Bans</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3571384/\">BH Resources</a>",
		],

		ruleset: ['Pokemon', 'Ability Clause', '-ate Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Groudon-Primal', 'Kyogre-Primal', 'Arena Trap', 'Huge Power', 'Moody', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Wonder Guard', 'Assist', 'Chatter'],
	},
	{
		name: "[Gen 7] 1v1",
		desc: [
			"Bring three Pok&eacute;mon to Team Preview and choose one to battle.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587523/\">1v1</a>",
		],

		mod: 'gen7',
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: [
			'Illegal', 'Unreleased', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre',
			'Kyurem-White', 'Lugia', 'Lunala', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Power Construct', 'Perish Song', 'Focus Sash', 'Kangaskhanite', 'Salamencite', 'Chansey + Charm + Seismic Toss',
		],
	},
	{
		name: "[Gen 7] Monotype",
		desc: [
			"All the Pok&eacute;mon on a team must share a type.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587204/\">Monotype</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3589809/\">Monotype Viability Ranking</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: [
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Giratina', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Lunala', 'Mewtwo', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Tapu Lele', 'Xerneas', 'Yveltal', 'Zekrom', 'Zygarde',
			'Battle Bond', 'Damp Rock', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite', 'Smooth Rock', 'Terrain Extender',
		],
	},
	{
		name: "[Gen 7] Mix and Mega",
		desc: [
			"Mega Stones and Primal Orbs can be used on almost any fully evolved Pok&eacute;mon with no Mega Evolution limit.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587740/\">Mix and Mega</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3591580/\">Mix and Mega Resources</a>",
		],

		mod: 'mixandmega',
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Mega Rayquaza Clause', 'Team Preview'],
		banlist: ['Baton Pass'],
		onValidateTeam: function (team) {
			let itemTable = {};
			for (let i = 0; i < team.length; i++) {
				let item = this.getItem(team[i].item);
				if (!item) continue;
				if (!(item in itemTable)) {
					itemTable[item] = 1;
				} else if (itemTable[item] < 2) {
					itemTable[item]++;
				} else {
					if (item.megaStone) return ["You are limited to two of each Mega Stone.", "(You have more than two " + this.getItem(item).name + ")"];
					if (item.id === 'blueorb' || item.id === 'redorb') return ["You are limited to two of each Primal Orb.", "(You have more than two " + this.getItem(item).name + ")"];
				}
			}
		},
		onValidateSet: function (set) {
			let template = this.getTemplate(set.species || set.name);
			let item = this.getItem(set.item);
			if (!item.megaEvolves && item.id !== 'blueorb' && item.id !== 'redorb') return;
			if (template.baseSpecies === item.megaEvolves || (template.baseSpecies === 'Groudon' && item.id === 'redorb') || (template.baseSpecies === 'Kyogre' && item.id === 'blueorb')) return;
			if (template.evos.length) return ["" + template.species + " is not allowed to hold " + item.name + " because it's not fully evolved."];
			let uberStones = ['beedrillite', 'gengarite', 'kangaskhanite', 'mawilite', 'medichamite'];
			if (template.tier === 'Uber' || set.ability === 'Power Construct' || uberStones.includes(item.id)) return ["" + template.species + " is not allowed to hold " + item.name + "."];
		},
		onBegin: function () {
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				pokemon.originalSpecies = pokemon.baseTemplate.species;
			}
		},
		onSwitchIn: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
				let oTemplate = this.getTemplate(pokemon.originalSpecies);
				if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				this.add('-end', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 7] Almost Any Ability",
		desc: [
			"Pok&eacute;mon can use any ability, barring the few that are banned.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587901/\">Almost Any Ability</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Ability Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Ignore Illegal Abilities',
			'Aegislash', 'Arceus', 'Archeops', 'Blaziken', 'Darkrai', 'Deoxys', 'Dialga', 'Genesect', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia',
			'Lunala', 'Mewtwo', 'Palkia', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram', 'Shaymin-Sky', 'Shedinja', 'Slaking', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Power Construct', 'Shadow Tag', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Salamencite',
		],
		onValidateSet: function (set) {
			let bannedAbilities = {'Arena Trap': 1, 'Comatose': 1, 'Contrary': 1, 'Fur Coat': 1, 'Huge Power': 1, 'Imposter': 1, 'Parental Bond': 1, 'Pure Power': 1, 'Simple':1, 'Speed Boost': 1, 'Water Bubble': 1, 'Wonder Guard': 1};
			if (set.ability in bannedAbilities) {
				let template = this.getTemplate(set.species || set.name);
				let legalAbility = false;
				for (let i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pok\u00e9mon that do not naturally have it.'];
			}
		},
	},
	{
		name: "[Gen 7] Sketchmons",
		desc: [
			"Pok&eacute;mon gain access to one Sketched move.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587743/\">Sketchmons</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Baton Pass Clause'],
		banlist: ['Allow One Sketch',
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Dialga', 'Genesect', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White',
			'Landorus-Base', 'Lugia', 'Lunala', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Power Construct', 'Shadow Tag', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Salamencite',
			'Arena Trap + Dark Void', 'Arena Trap + Grass Whistle', 'Arena Trap + Hypnosis', 'Arena Trap + Relic Song', 'Arena Trap + Sing', 'Arena Trap + Sleep Powder',
		],
		noSketch: ['Celebrate', 'Conversion', "Forest's Curse", 'Geomancy', 'Happy Hour', 'Hold Hands', 'Lovely Kiss', 'Purify', 'Shell Smash', 'Shift Gear', 'Sketch', 'Spore', 'Trick-or-Treat'],
		onValidateTeam: function (team) {
			let sketchedMoves = {};
			for (let i = 0; i < team.length; i++) {
				let move = team[i].sketchmonsMove;
				if (!move) continue;
				if (move in sketchedMoves) {
					return ["You are limited to sketching one of each move by Move Clause.", "(You have sketched " + this.getMove(move).name + " more than once)"];
				}
				sketchedMoves[move] = (team[i].name || team[i].species);
			}
		},
	},
	{
		name: "Tier Shift",
		desc: [
			"Pok&eacute;mon below OU/BL get all their stats boosted. UU/BL2 get +5, RU/BL3 get +10, NU/BL4 get +15, and PU or lower get +20.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3554765/\">Tier Shift</a>",
		],

		mod: 'tiershift',
		ruleset: ['OU'],
		banlist: ['Damp Rock'],
	},
	{
		name: "Inverse Battle",
		desc: [
			"Battle with an inverted type chart.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3518146/\">Inverse Battle</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526371/\">Inverse Battle Viability Ranking</a>",
		],

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: [
			'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Diggersby', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Hoopa-Unbound', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Serperior',
			'Shaymin-Sky', 'Snorlax', 'Xerneas', 'Yveltal', 'Zekrom', 'Gengarite', 'Kangaskhanite', 'Salamencite', 'Soul Dew', 'Shadow Tag',
		],
		onNegateImmunity: false,
		onEffectiveness: function (typeMod, target, type, move) {
			// The effectiveness of Freeze Dry on Water isn't reverted
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		},
	},
	{
		name: "2v2 Doubles",
		desc: [
			"Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547040/\">2v2 Doubles</a>",
		],

		gameType: 'doubles',
		searchShow: false,
		teamLength: {
			validate: [2, 4],
			battle: 2,
		},
		ruleset: ['Doubles OU'],
		banlist: ['Kangaskhanite', 'Perish Song'],
	},
	{
		name: "[Gen 7] Hidden Type",
		desc: [
			"Pok&eacute;mon have an added type determined by their IVs. Same as the Hidden Power type.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3591194/\">Hidden Type</a>",
		],

		searchShow: false,
		mod: 'hiddentype',
		ruleset: ['[Gen 7] OU'],
	},
	{
		name: "[Gen 7] BH Doubles",
		desc: [
			"Anything that can be hacked in-game and is usable in local battles is allowed.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587475/\">Balanced Hackmons</a>",
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 7] Balanced Hackmons'],
		banlist: [],
	},
	{
		name: "OU Theorymon",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3559611/\">OU Theorymon</a>"],

		mod: 'theorymon',
		searchShow: false,
		ruleset: ['OU'],
	},
	{
		name: "Gen-NEXT OU",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber'],
	},

	// Random Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 2,
	},
	{
		name: "[Gen 7] Challenge Cup",

		mod: 'gen7',
		team: 'randomCC',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Battle Factory",

		team: 'randomFactory',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 7] Random Monotype",
		mod: 'randoms',

		searchShow: true,
		team: 'randomMonoType',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Random Inverse Battle",

		searchShow: false,
		team: 'random',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Sleep Clause Mod', 'Cancel Mod'],
		onNegateImmunity: function (pokemon, type) {
			if (type in this.data.TypeChart && this.runEvent('Immunity', pokemon, null, null, type)) return false;
		},
		onEffectiveness: function (typeMod, target, type, move) {
			// The effectiveness of Freeze Dry on Water isn't reverted
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		},
	},
	{
		name: "Random Haxmons",

		searchShow: false,
		team: 'random',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Sleep Clause Mod', 'Freeze Clause', 'Cancel Mod'],
		onModifyMovePriority: -100,
		onModifyMove: function (move) {
			if (move.accuracy !== true && move.accuracy < 100) move.accuracy = 0;
			move.willCrit = true;
			if (move.secondaries) {
				for (let i = 0; i < move.secondaries.length; i++) {
					move.secondaries[i].chance = 100;
				}
			}
		},
	},
	{
		name: "[Gen 7] Hackmons Cup",
		desc: ["Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item."],

		mod: 'gen7',
		team: 'randomHC',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Doubles Hackmons Cup",

		mod: 'gen7',
		gameType: 'doubles',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Random Sky Battle",
		mod: 'randoms',

		searchShow: true,
		team: 'randomSky',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Random Ubers",
		mod: 'randoms',

		searchShow: true,
		team: 'randomUber',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Random LC",
		mod: 'randoms',

		searchShow: true,
		team: 'randomLC',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Random CAP",
		mod: 'randoms',

		searchShow: true,
		team: 'randomCap',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Random MonoGen",
		mod: 'randoms',

		searchShow: true,
		team: 'randomMonoGen',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Challenge Cup 2-vs-2",
		mod: 'randoms',

		gameType: 'doubles',
		team: 'randomCC',
		searchShow: true,
		ruleset: ['Pokemon', 'Team Preview 2v2', 'HP Percentage Mod', 'Cancel Mod'],
		onBegin: function () {
			this.debug('Cutting down to 2');
			this.p1.pokemon = this.p1.pokemon.slice(0, 2);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 2);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
	},
	{
		name: "[Gen 7] Challenge Cup 1v1",

		mod: 'gen7',
		team: 'randomCC',
		teamLength: {
			battle: 1,
		},
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "[Gen 7] Challenge Cup Metronome",
		mod: 'randoms',

		searchShow: true,
		team: 'randomMetro',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},

	// Local Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: 'Local Metagames',
		column: 3,
	},
	{
		name: "1v1 (No Team Preview)",
		teamLength: {
			battle: 1,
		},
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Cancel Mod'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal',
			'Zekrom', 'Focus Sash', 'Kangaskhanite', 'Soul Dew',
		],
	},
	{
		name: "Mega Tier",
		mod: 'megatier',
		ruleset: ['OU'],
	},
	{
		name: "Metagamiate",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview', 'Cancel Mod'],
		banlist: ['Gengarite', 'Kangaskhanite', 'Lucarionite', 'Soul Dew',
			'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Genesect', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Kyogre', 'Ho-Oh', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram',
			'Shaymin-Sky', 'Kyurem-White', 'Xerneas', 'Yveltal', 'Zekrom',
		],
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && move.id !== 'hiddenpower' && !pokemon.hasAbility(['aerilate', 'pixilate', 'refrigerate'])) {
				let types = pokemon.getTypes();
				if (!types[0] || types[0] === '???') return;
				move.type = types[0];
				move.isMetagamiate = true;
			}
		},
		onBasePowerPriority: 9,
		onBasePower: function (basePower, attacker, defender, move) {
			if (!move.isMetagamiate) return;
			return this.chainModify([0x14CD, 0x1000]);
		},
	},
	{
		name: "Same Type Stealth Rock",
		mod: 'stsr',
		ruleset: ['OU'],
	},
	{
		name: "Startermons",

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause', 'Cancel Mod'],
		banlist: ['Soul Dew', 'Charizardite X', 'Charizardite Y', 'Venusaurite', 'Blastoisinite', 'Blazikenite', 'Blaziken + Speed Boost'],
		validateSet: function (set) {
			let validStarters = {
				"Bulbasaur":1, "Ivysaur":1, "Venusaur":1, "Charmander":1, "Charmeleon":1, "Charizard":1, "Squirtle":1, "Wartortle":1, "Blastoise":1,
				"Chikorita":1, "Bayleef":1, "Meganium":1, "Cyndaquil":1, "Quilava":1, "Typhlosion":1, "Totodile":1, "Croconaw":1, "Feraligatr":1,
				"Treecko":1, "Grovyle":1, "Sceptile":1, "Torchic":1, "Combusken":1, "Blaziken":1, "Mudkip":1, "Marshtomp":1, "Swampert":1,
				"Turtwig":1, "Grotle":1, "Torterra":1, "Chimchar":1, "Monferno":1, "Infernape":1, "Piplup":1, "Prinplup":1, "Empoleon":1,
				"Snivy":1, "Servine":1, "Serperior":1, "Tepig":1, "Pignite":1, "Emboar":1, "Oshawott":1, "Dewott":1, "Samurott":1,
				"Chespin":1, "Quilladin":1, "Chesnaught":1, "Fennekin":1, "Braixen":1, "Delphox":1, "Froakie":1, "Frogadier":1, "Greninja":1,
				"Pikachu":1, "Raichu":1,
			};
			if (!(set.species in validStarters)) {
				return [set.species + " is not a starter."];
			}
		},
		validateTeam: function (team) {
			let problems = [];
			let hasOneOfEach = true;
			let gens = [0, 0, 0, 0, 0, 0];
			for (let i = 0; i < team.length; i++) {
				let pokemon = Tools.getTemplate(team[i].species || team[i].name);
				if (pokemon.num <= 151) ++gens[0];
				else if (pokemon.num <= 251) ++gens[1];
				else if (pokemon.num <= 386) ++gens[2];
				else if (pokemon.num <= 494) ++gens[3];
				else if (pokemon.num <= 649) ++gens[4];
				else if (pokemon.num <= 721) ++gens[5];
			}
			for (let j in gens) {
				if (gens[j] > 1) hasOneOfEach = false;
			}
			if (!hasOneOfEach) problems.push('You must bring a Pokemon of each gen.');
			return problems;
		},
	},
	{
		name: "VGC 2010",
		gameType: 'doubles',
		searchShow: true,

		mod: 'gen4',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Species Clause', 'Item Clause', 'Cancel Mod'],
		banlist: ['Unreleased', 'Illegal', 'Soul Dew', 'Huntail + Shell Smash + Sucker Punch', 'Manaphy', 'Mew', 'Arceus', 'Shaymin', 'Darkrai', 'Celebi', 'Jirachi', 'Deoxys', 'Phione'],
		validateTeam: function (team) {
			let legendCount = 0;
			for (let i = 0; i < 4; i++) {
				let pokemon = Tools.getTemplate(team[i].species || team[i].name);
				if (pokemon.species in {'Mewtwo': 1, 'Lugia': 1, 'Ho-Oh': 1, 'Rayquaza': 1, 'Kyogre': 1, 'Groudon': 1, 'Dialga': 1, 'Palkia': 1, 'Giratina': 1}) legendCount++;
			}
			if (legendCount > 2) return ['You can\'t use more than two of these pokemon: Mewtwo, Lugia, Ho-Oh, Rayquaza, Kyogre, Groudon, Dialga, Palkia, Giratina.'];
		},
	},
	{
		name: "[Gen 7] Perseverance",
		
		effectType: 'Format',
		challengeDefault: true,
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		defaultLevel: 100,
		onFaint: function(pokemon) {
				let name = pokemon.side.name;
				let winner = '';
				if (pokemon.side.id === 'p1') {
					winner = 'p2';
				} else {
					winner = 'p1';
				}
				pokemon.battle.win(winner);
			
		},
		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Sleep Clause Mod', 'OHKO Clause', 'Species Clause', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Toxapex']
	},
	{
		name: "Balanced Hackmons (Doubles)",
		gameType: 'doubles',

		ruleset: ['Pokemon', 'Ability Clause', '-ate Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Arena Trap', 'Huge Power', 'Parental Bond', 'Pure Power', 'Shadow Tag', 'Wonder Guard', 'Assist', 'Chatter'],
	},

	// RoA Spotlight
	///////////////////////////////////////////////////////////////////

	{
		section: "RoA Spotlight",
		column: 3,
	},
	{
		name: "[Gen 3] UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/dex/rs/formats/uu/\">ADV UU</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3548578/\">ADV UU Viability Ranking</a>",
		],

		mod: 'gen3',
		ruleset: ['[Gen 3] OU'],
		banlist: ['OU', 'BL'],
	},

	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "BW2 Singles",
		column: 3,
	},
	{
		name: "[Gen 5] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551993/\">BW2 OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew'],
	},
	{
		name: "[Gen 5] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3550881/\">BW2 Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446463/\">BW2 Ubers Sample Teams</a>",
		],

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
	},
	{
		name: "[Gen 5] UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3474024/\">BW2 UU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream', 'Snow Warning'],
	},
	{
		name: "[Gen 5] RU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3473124/\">BW2 RU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning'],
	},
	{
		name: "[Gen 5] NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3484121/\">BW2 NU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'BL3', 'Prankster + Assist'],
	},
	{
		name: "[Gen 5] LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3485860/\">BW2 LC Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Gligar', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela'],
	},
	{
		name: "[Gen 5] GBU Singles",

		mod: 'gen5',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Random Battle",

		mod: 'gen5',
		searchShow: false,
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 5] Custom Game",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: 'BW2 Doubles',
		column: 3,
	},
	{
		name: "[Gen 5] Doubles OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533424/\">BW2 Doubles Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533421/\">BW2 Doubles Viability Ranking</a>",
		],

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: [
			'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Jirachi',
			'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Zekrom', 'Soul Dew', 'Dark Void', 'Sky Drop',
		],
	},
	{
		name: "[Gen 5] GBU Doubles",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Doubles Custom Game",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// DPP Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "DPP Singles",
		column: 4,
	},
	{
		name: "[Gen 4] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
		],

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 4] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3505128/\">DPP Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446464/\">DPP Ubers Sample Teams</a>",
		],

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Arceus'],
	},
	{
		name: "[Gen 4] UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503638/\">DPP UU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
		],

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL'],
	},
	{
		name: "[Gen 4] LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/dp/articles/little_cup_guide\">DPP LC Guide</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
		],

		mod: 'gen4',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Little Cup'],
		banlist: ['LC Uber', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma', 'Berry Juice', 'DeepSeaTooth', 'Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 4] Custom Game",

		mod: 'gen4',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// DPP Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "DPP Doubles",
		column: 4,
	},
	{
		name: "[Gen 4] Doubles Custom Game",

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Generations",
		column: 4,
	},
	{
		name: "[Gen 3] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>",
		],

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain'],
	},
	{
		name: "[Gen 3] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536426/\">ADV Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446466/\">ADV Ubers Sample Teams</a>",
		],

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Wobbuffet + Leftovers'],
	},
	{
		name: "[Gen 3] Custom Game",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 2] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503082/\">GSC OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
		],

		mod: 'gen2',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 2] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3507552/\">GSC Ubers Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
		],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 2] Random Battle",

		mod: 'gen2',
		searchShow: false,
		team: 'random',
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 2] Custom Game",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3486845/\">RBY OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
		],

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3541329/\">RBY Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 1] OU (tradeback)",

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Allow Tradeback', 'Uber', 'Unreleased', 'Illegal',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Random Battle",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Challenge Cup",

		mod: 'gen1',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Stadium",

		mod: 'stadium',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Custom Game",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
];
