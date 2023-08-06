console.log("Welcome to Spotify");

//initializw the variables
let songIndex = 0;
let audioElement = new Audio('songs/Asal Mein.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "Asal Mein - Darshan Rawal", filePath: "songs/Asal Mein.mp3", coverPath: "covers/asal mein.jpg"},
    {songName: "Maan Meri Jaan - King", filePath: "songs/Maan Meri Jaan.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Chaand Baaliyan - Aditya A", filePath: "songs/Chaand Baaliyan.mp3", coverPath: "covers/3.jpg"},
    {songName: "Main Hoon Saath Tere - Shivangi B", filePath: "songs/Main Hoon Saath Tere.mp3", coverPath: "covers/4.jpg"},
    {songName: "Maiyya Mainu - Sachet-Parampara", filePath: "songs/Maiyya Mainu.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rang Jo Lagyo - Atif A & Shreya G", filePath: "songs/Rang Jo Lagyo.mp3", coverPath: "covers/6.jpg"},
    {songName: "Apna Bana Le - Arijit Singh", filePath: "songs/Apna Bana Le.mp3", coverPath: "covers/7.jpg"},
    {songName: "Dariya - Arko", filePath: "songs/Dariya.mp3", coverPath: "covers/8.jpeg"},
    {songName: "Malang Sajna - Sachet-Parsmpara", filePath: "songs/Malang Sajna.mp3", coverPath: "covers/9.jpeg"},
    {songName: "Rabba Janda - Jubin Nautiyal", filePath: "songs/Rabba Janda.mp3", coverPath: "covers/10.jpg"},
    {songName: "Ranjhana ve - Pramod Kumar", filePath: "songs/Mere Sapno Ki Galiyon Mein.mp3", coverPath: "covers/11.jpeg"},
]

songitems.forEach((element, i)=>{
   
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();

//handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
       audioElement.pause();
       masterplay.classList.remove('fa-circle-pause');
       masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


//listen to events
audioElement.addEventListener('timeupdate', ()=>{
   
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
   
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change' , ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        mastersongname.innerText = songs[songIndex].songName; 
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex>=10) {
        songIndex=0;
    }else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex<=0) {
        songIndex=0
    }else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

})
