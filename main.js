var firstDisplayTop = "Haiiii Enlin :3 Welcome to ur Crimsmas baby adventure!!! I have <5> challenges for u, complete them all and get a baby reward!! :D";
var firstDisplayBottom = "Your first clue is in: Neko Atsume! Come visit my yard :3 https://hp.sakuraweb.com/games/neko2/d.php?d=NMhe6OlSbpOQ1MBUxJAptRxRUlApNRc-PPmqgObJVppUV6KvvDS2DSr62Uv93qqSKR22U18x0GyVwCqypYLwMRzEM1C_vW-VCxUkfzh-ylKx1Ae-hBgJR2QYUU7mn0vm6VUl05dajpxsuyms-LkSEetLZQK9bEXDn6-GMksLxDmiUD5rDTG_vw1mLiSdD_xbbeSz5WqjlDpUdiNnJ_ZNtIRsZANSFvse_zzhooQhK1Y";
var secondDisplayTop = "Good job on that first puzzle :DD Baby is a little sherlock homes :3";
var secondDisplayBottom = "Your next clue is in: Honkai! Check your messages with me...";
var thirdDisplayTop = "Hehe, good job ^w^ You're one step closer to becoming a true baby!! But a true baby must be able to FIGHT!!!!!";
var thirdDisplayBottom = "Your next clue is in: Valorant! I'll invite you, defeat me 10 times for your code...";
var fourthDisplayTop = "waos,,,, yore so good at shooty game,, YOURE AN AMAZING BABYYYY :33";
var fourthDisplayBottom = "Your next clue is in: Pokemon Showdown! Challenge chrimsasaidan444 to a game of Gen 9 Ubers...";
var fifthDisplayTop = "YOU'RE A BABYMON MASTAAAAA!!!! :3 good job";
var fifthDisplayBottom = "Your final clue is in: Minecraft! Download these mods and install version 1.20.1 FABRIC MOD LOADER, then launch... https://drive.google.com/drive/folders/1ByUJiu59Z2snLWTX9CF4Yl3boMaLENN_?usp=sharing";
var finalDisplayTop = "WAAAAAAA GOOD JOB BABYYYYYYY!!!!!!! you are now.... THE ULTIMATE BABY!!! you win :33 i hope u enjoyed aidans little baby adventure challenge!!";
var finalDisplayBottom = "Your reward is: 23H4X-3D0VQ-DYKAT (STEAM GIFT CARD :D) BAIBAIIIIII!!!!!!!!!!!!!!!!";
var countTicker = true;

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const pageOpen = async () => {
	for (let i = 0; i <= firstDisplayTop.length; i++) {
		await sleep(50);
		document.getElementById("topDisplay").innerHTML = (firstDisplayTop.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("topDisplay").innerHTML = (firstDisplayTop + "|");
			countTicker = false;
		} else {
			document.getElementById("topDisplay").innerHTML = (firstDisplayTop + "&nbsp")
			countTicker = true;
		}
	}
	for (let i = 0; i <= firstDisplayBottom.length; i++) {
		await sleep(20);
		document.getElementById("bottomDisplay").innerHTML = (firstDisplayBottom.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("bottomDisplay").innerHTML = (firstDisplayBottom + "|");
			countTicker = false;
		} else {
			document.getElementById("bottomDisplay").innerHTML = (firstDisplayBottom + "&nbsp")
			countTicker = true;
		}
	}
}

const firstCode = async () => {
	for (let i = 0; i <= secondDisplayTop.length; i++) {
		await sleep(50);
		document.getElementById("topDisplay").innerHTML = (secondDisplayTop.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("topDisplay").innerHTML = (secondDisplayTop + "|");
			countTicker = false;
		} else {
			document.getElementById("topDisplay").innerHTML = (secondDisplayTop + "&nbsp")
			countTicker = true;
		}
	}
	for (let i = 0; i <= secondDisplayBottom.length; i++) {
		await sleep(50);
		document.getElementById("bottomDisplay").innerHTML = (secondDisplayBottom.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("bottomDisplay").innerHTML = (secondDisplayBottom + "|");
			countTicker = false;
		} else {
			document.getElementById("bottomDisplay").innerHTML = (secondDisplayBottom + "&nbsp")
			countTicker = true;
		}
	}
}

const secondCode = async () => {
	for (let i = 0; i <= thirdDisplayTop.length; i++) {
		await sleep(50);
		document.getElementById("topDisplay").innerHTML = (thirdDisplayTop.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("topDisplay").innerHTML = (thirdDisplayTop + "|");
			countTicker = false;
		} else {
			document.getElementById("topDisplay").innerHTML = (thirdDisplayTop + "&nbsp")
			countTicker = true;
		}
	}
	for (let i = 0; i <= thirdDisplayBottom.length; i++) {
		await sleep(50);
		document.getElementById("bottomDisplay").innerHTML = (thirdDisplayBottom.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("bottomDisplay").innerHTML = (thirdDisplayBottom + "|");
			countTicker = false;
		} else {
			document.getElementById("bottomDisplay").innerHTML = (thirdDisplayBottom + "&nbsp")
			countTicker = true;
		}
	}
}

const thirdCode = async () => {
	for (let i = 0; i <= fourthDisplayTop.length; i++) {
		await sleep(50);
		document.getElementById("topDisplay").innerHTML = (fourthDisplayTop.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("topDisplay").innerHTML = (fourthDisplayTop + "|");
			countTicker = false;
		} else {
			document.getElementById("topDisplay").innerHTML = (fourthDisplayTop + "&nbsp")
			countTicker = true;
		}
	}
	for (let i = 0; i <= fourthDisplayBottom.length; i++) {
		await sleep(50);
		document.getElementById("bottomDisplay").innerHTML = (fourthDisplayBottom.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("bottomDisplay").innerHTML = (fourthDisplayBottom + "|");
			countTicker = false;
		} else {
			document.getElementById("bottomDisplay").innerHTML = (fourthDisplayBottom + "&nbsp")
			countTicker = true;
		}
	}
}

const fourthCode = async () => {
	for (let i = 0; i <= fifthDisplayTop.length; i++) {
		await sleep(50);
		document.getElementById("topDisplay").innerHTML = (fifthDisplayTop.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("topDisplay").innerHTML = (fifthDisplayTop + "|");
			countTicker = false;
		} else {
			document.getElementById("topDisplay").innerHTML = (fifthDisplayTop + "&nbsp")
			countTicker = true;
		}
	}
	for (let i = 0; i <= fifthDisplayBottom.length; i++) {
		await sleep(50);
		document.getElementById("bottomDisplay").innerHTML = (fifthDisplayBottom.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("bottomDisplay").innerHTML = (fifthDisplayBottom + "|");
			countTicker = false;
		} else {
			document.getElementById("bottomDisplay").innerHTML = (fifthDisplayBottom + "&nbsp")
			countTicker = true;
		}
	}
}

const fifthCode = async () => {
	for (let i = 0; i <= finalDisplayTop.length; i++) {
		await sleep(50);
		document.getElementById("topDisplay").innerHTML = (finalDisplayTop.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("topDisplay").innerHTML = (finalDisplayTop + "|");
			countTicker = false;
		} else {
			document.getElementById("topDisplay").innerHTML = (finalDisplayTop + "&nbsp")
			countTicker = true;
		}
	}
	for (let i = 0; i <= finalDisplayBottom.length; i++) {
		await sleep(50);
		document.getElementById("bottomDisplay").innerHTML = (finalDisplayBottom.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("bottomDisplay").innerHTML = (finalDisplayBottom + "|");
			countTicker = false;
		} else {
			document.getElementById("bottomDisplay").innerHTML = (finalDisplayBottom + "&nbsp")
			countTicker = true;
		}
	}
}

pageOpen();

function submitFirstPassword() {
	if (document.getElementById("passwordEnter").value == "brygbr"){
		document.getElementById("passwordButton").setAttribute("onclick","submitSecondPassword()");
		firstCode();
		document.getElementById("passwordEnter").value = "";
		document.getElementById("passwordEnter").placeholder = "Hint: First Letter";
		document.getElementById("verify").style.color = "#7FFF00";
		document.getElementById("verify").innerHTML = "Correct!";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	} else {
		document.getElementById("passwordEnter").value = "";
		document.getElementById("verify").style.color = "red";
		document.getElementById("verify").innerHTML = "Incorrect. (Enter the colors from left to right, ex: rgbryb)";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 5000)
	}
}

function submitSecondPassword() {
	if (document.getElementById("passwordEnter").value == "iloveubby"){
		document.getElementById("passwordButton").setAttribute("onclick","submitThirdPassword()");
		secondCode();
		document.getElementById("passwordEnter").value = "";
		document.getElementById("passwordEnter").placeholder = "Hint: No Hint!";
		document.getElementById("verify").style.color = "#7FFF00";
		document.getElementById("verify").innerHTML = "Correct!";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	} else {
		document.getElementById("passwordEnter").value = "";
		document.getElementById("verify").style.color = "red";
		document.getElementById("verify").innerHTML = "Incorrect. (Enter the first letter from top to bottom, ex: irubwbere)";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	}
}

function submitThirdPassword() {
	if (document.getElementById("passwordEnter").value == "enworb4ever"){
		document.getElementById("passwordButton").setAttribute("onclick","submitFourthPassword()");
		thirdCode();
		document.getElementById("passwordEnter").value = "";
		document.getElementById("passwordEnter").placeholder = "Hint: Good Luck..";
		document.getElementById("verify").style.color = "#7FFF00";
		document.getElementById("verify").innerHTML = "Correct!";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	} else {
		document.getElementById("passwordEnter").value = "";
		document.getElementById("verify").style.color = "red";
		document.getElementById("verify").innerHTML = "Incorrect.";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	}
}

function submitFourthPassword() {
	if (document.getElementById("passwordEnter").value == "thugenlin69"){
		document.getElementById("passwordButton").setAttribute("onclick","submitFifthPassword()");
		fourthCode();
		document.getElementById("passwordEnter").value = "";
		document.getElementById("passwordEnter").placeholder = "Hint: Look Around";
		document.getElementById("verify").style.color = "#7FFF00";
		document.getElementById("verify").innerHTML = "Correct!";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	} else {
		document.getElementById("passwordEnter").value = "";
		document.getElementById("verify").style.color = "red";
		document.getElementById("verify").innerHTML = "Incorrect. You can look up a team if you need one..";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	}
}

function submitFifthPassword() {
	if (document.getElementById("passwordEnter").value == "591371"){
		fifthCode();
		document.getElementById("passwordEnter").style.display = "none";
		document.getElementById("passwordText").style.display = "none";
		document.getElementById("passwordButton").style.display = "none";
		document.getElementById("verify").style.color = "#7FFF00";
		document.getElementById("verify").innerHTML = "Correct!";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	} else {
		document.getElementById("passwordEnter").value = "";
		document.getElementById("verify").style.color = "red";
		document.getElementById("verify").innerHTML = "Incorrect. Top number is order..";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	}
}