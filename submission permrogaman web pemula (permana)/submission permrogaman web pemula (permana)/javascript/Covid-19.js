let copy = document.getElementById("copy");
copy.innerHTML = "hotline Covid-19 119";

let corona = document.getElementsByClassName("corona"); /* buat animasi warna berganti-ganti*/
setInterval (function () {
	corona[0].style.color = "brown";

	setTimeout (function () {
		corona[0].style.color ="black";
	},500)
}, 1000);
