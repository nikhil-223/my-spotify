
// songPlay.play();
let songPlay = new Audio("./songs/1.mp3"); 

let songItem = Array.from(document.getElementsByClassName("songItem"));
let songlist=[
    {songName:"", filePath:"songs/1.mp3" ,coverPath:"cover/1.jpg" },
    {songName:"", filePath:"songs/2.mp3" ,coverPath:"cover/2.jpg" },
    {songName:"", filePath:"songs/3.mp3" ,coverPath:"cover/3.jpg" },
    {songName:"", filePath:"songs/4.mp3" ,coverPath:"cover/4.jpg" },
    {songName:"", filePath:"songs/5.mp3" ,coverPath:"cover/5.jpg" },
    {songName:"", filePath:"songs/6.mp3" ,coverPath:"cover/6.jpg" },
    {songName:"", filePath:"songs/7.mp3" ,coverPath:"cover/7.jpg" },
    {songName:"", filePath:"songs/8.mp3" ,coverPath:"cover/8.jpg" },
    {songName:"", filePath:"songs/9.mp3" ,coverPath:"cover/9.jpg" },
    {songName:"", filePath:"songs/10.mp3" ,coverPath:"cover/10.jpg" }
]
let gif=document.getElementById("gif");
let masterplay=document.getElementById("masterplay");
let progressBar=document.getElementById("myProgressBar")
masterplay.addEventListener("click",()=>{
    if(songPlay.paused || songPlay.currentTime<=0){ 
        songPlay.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        gif.style.opacity=1; 
    }
    else{
        songPlay.pause();
		masterplay.classList.add("fa-play");
		masterplay.classList.remove("fa-pause");
        gif.style.opacity=0; 
    }

})

songPlay.addEventListener('timeupdate',()=>{
    progress= parseInt((songPlay.currentTime/songPlay.duration)*100);
    progressBar.value=progress;
})
progressBar.addEventListener("change",()=>{
    songPlay.currentTime= progressBar.value*songPlay.duration/100;
})

for(key in songItem){  
    let j= songItem[key];
    j.addEventListener("click", () => {
    let songPlay = new Audio(`./songs/1.mp3`); 
	songPlay.play();
});
}