

let songlist = [
	{
		songName: "Is this love ",
		filePath: "songs/1.mp3",
		coverPath: "./covers/1.jpg"
	},
	{
		songName: "Hai mera dil",
		filePath: "songs/2.mp3",
		coverPath: "./covers/2.jpg"
	},
	{
		songName: "aye khuda",
		filePath: "songs/3.mp3",
		coverPath: "./covers/3.jpg"
	},
	{ songName: "aise kyu", filePath: "songs/4.mp3", coverPath: "./covers/4.jpg" },
	{ songName: "hjhk", filePath: "songs/5.mp3", coverPath: "./covers/5.jpg" },
	{
		songName: "love like this ",
		filePath: "songs/6.mp3",
		coverPath: "./covers/6.jpg"
	},
	{ songName: "iraadey", filePath: "songs/7.mp3", coverPath: "./covers/7.jpg" },
	{ songName: "bikhra", filePath: "songs/8.mp3", coverPath: "./covers/8.jpg" },
	{ songName: "gul", filePath: "songs/9.mp3", coverPath: "./covers/9.jpg" },
	{
		songName: "thinking out loud",
		filePath: "songs/10.mp3",
		coverPath: "./covers/10.jpg"
	}
];
let gif = document.getElementById("gif");
let masterplay = document.getElementById("masterplay");
let progressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songPlay = new Audio(`./songs/1.mp3`);
let forwardbtn= document.getElementById("forwardd")
let backwardbtn= document.getElementById("backwardd")

songItems.forEach((element, i) => {
	element.getElementsByTagName("img")[0].src = songlist[i].coverPath;
	element.getElementsByTagName("span")[0].innerText = songlist[i].songName;
});

forwardbtn.addEventListener("click",()=>{

        filepath =parseInt(e.target.id) ;
		songPlay.src = songlist[filepath].filePath;
		songPlay.currentTime = 0;
		songPlay.play();
		masterplay.classList.add("fa-pause");
		masterplay.classList.remove("fa-play");
		gif.style.opacity = 1;
})

songItems.forEach((element,i) => {
	element.addEventListener("click", (e) => {

        filepath = songlist[parseInt(e.target.id)].filePath;
        songPlay.src = filepath ;
        songPlay.currentTime=0;
        songPlay.play();
        masterplay.classList.add("fa-pause");
        masterplay.classList.remove("fa-play");
        gif.style.opacity = 1;
        
    });
});

masterplay.addEventListener("click", () => {
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
