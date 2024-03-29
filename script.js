let songlist = [
	{
		songName: "Aise Kyun ",
		filePath: "songs/Aise Kyun .mp3",
		coverPath: "./covers/1.jpg",
		songtime: "5:45",
	},
	{
		songName: "Gul",
		filePath: "songs/Anuv Jain.mp3",
		coverPath: "./covers/2.jpg",
		songtime: "5:45",
	},
	{
		songName: "Flute",
		filePath: "songs/flute.mp3",
		coverPath: "./covers/3.jpg",
		songtime: "5:45",
	},
	{
		songName: "Haaye Oye",
		filePath: "songs/Haaye Oye.mp3",
		coverPath: "./covers/4.jpg",
		songtime: "5:45",
	},
	{
		songName: "Iraaday Song Abdul Hannan",
		filePath: "songs/Iraaday Song Abdul Hannan.mp3",
		coverPath: "./covers/5.jpg",
		songtime: "5:45",
	},
	{
		songName: "Kuch na kari",
		filePath: "songs/kuch na kari.mp3",
		coverPath: "./covers/6.jpg",
		songtime: "5:45",
	},
	{
		songName: "Raataan Lambiyan",
		filePath: "songs/Raataan Lambiyan.mp3",
		coverPath: "./covers/7.jpg",
		songtime: "5:45",
	},
	{
		songName: "Ranjha",
		filePath: "songs/Ranjha.mp3",
		coverPath: "./covers/8.jpg",
		songtime: "5:45",
	},
	{
		songName: "Yeh Saari Baat",
		filePath: "songs/Yeh Saari Baat.mp3",
		coverPath: "./covers/9.jpg",
		songtime: "5:45",
	},
	{
		songName: "Flute music",
		filePath: "songs/flute music.mp3",
		coverPath: "./covers/10.jpg",
		songtime: "5:45",
	},
	{
		songName: "Flute music",
		filePath: "songs/flute music.mp3",
		coverPath: "./covers/10.jpg",
		songtime: "5:45",
	},
	{
		songName: "Flute music",
		filePath: "songs/flute music.mp3",
		coverPath: "./covers/10.jpg",
		songtime: "5:45",
	},
	{
		songName: "Flute music",
		filePath: "songs/flute music.mp3",
		coverPath: "./covers/10.jpg",
		songtime: "5:45",
	},
];
let gif = document.getElementById("gif");
let masterplay = document.getElementById("masterplay");
let progressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songPlay = new Audio(`./songs/Aise Kyun .mp3`);
let forwardbtn = document.getElementById("forwardd");
let backwardbtn = document.getElementById("backwardd");
let bottom_songname = document
	.getElementsByClassName("itemInfo")[0]
	.getElementsByTagName("span")[0];
let filepath = 0;
let filename = "";
if (screen.width <= 500) {
	bottom_songname.innerText = "";
}

songItems.forEach((element, i) => {
	element.getElementsByTagName("img")[0].src = songlist[i].coverPath;
	element.getElementsByTagName("span")[0].innerText = songlist[i].songName;
	element
		.querySelector(".songListPlay")
		.getElementsByTagName("span")[0].innerText = songlist[i].songtime;
});

forwardbtn.addEventListener("click", () => {
	if (filepath > 9) {
		filepath = 0;
	} else {
		filepath += 1;
	}
	filename = songlist[filepath].songName;
	if (screen.width <= 500) {
		bottom_songname.innerText = "";
	} else {
		bottom_songname.innerText = filename;
	}
	songPlay.src = songlist[filepath].filePath;
	songPlay.currentTime = 0;
	songPlay.play();
	masterplay.classList.add("fa-pause");
	masterplay.classList.remove("fa-play");
	gif.style.opacity = 1;
});
backwardbtn.addEventListener("click", () => {
	if (filepath < 0) {
		filepath = 9;
	} else {
		filepath -= 1;
	}
	filename = songlist[filepath].songName;
	if (screen.width <= 500) {
		bottom_songname.innerText = "";
	} else {
		bottom_songname.innerText = filename;
	}
	songPlay.src = songlist[filepath].filePath;
	songPlay.currentTime = 0;
	songPlay.play();
	masterplay.classList.add("fa-pause");
	masterplay.classList.remove("fa-play");
	gif.style.opacity = 1;
});

songItems.forEach((element, i) => {
	element.addEventListener("click", (e) => {
		filepath = parseInt(e.target.id);
		songPlay.src = songlist[filepath].filePath;
		filename = songlist[filepath].songName;
		if (screen.width <= 500) {
			bottom_songname.innerText = "";
		} else {
			bottom_songname.innerText = filename;
		}
		songPlay.currentTime = 0;
		songPlay.play();
		masterplay.classList.add("fa-pause");
		masterplay.classList.remove("fa-play");
		gif.style.opacity = 1;
	});
});

masterplay.addEventListener("click", () => {
	filename = songlist[filepath].songName;
	if (screen.width <= 500) {
		bottom_songname.innerText = "";
	} else {
		bottom_songname.innerText = filename;
	}

	if (songPlay.paused || songPlay.currentTime <= 0) {
		songPlay.play();
		masterplay.classList.remove("fa-play");
		masterplay.classList.add("fa-pause");
		gif.style.opacity = 1;
	} else {
		songPlay.pause();
		masterplay.classList.add("fa-play");
		masterplay.classList.remove("fa-pause");
		gif.style.opacity = 0;
	}
});

songPlay.addEventListener("timeupdate", () => {
	progress = parseInt((songPlay.currentTime / songPlay.duration) * 100);
	progressBar.value = progress;
});
progressBar.addEventListener("change", () => {
	songPlay.currentTime = (progressBar.value * songPlay.duration) / 100;
});

// for(key in songItem){
//     let j= songItem[key];
//     j.addEventListener("click", () => {
//     let songPlay = new Audio(`./songs/1.mp3`);
// 	songPlay.play();
// });
// }
