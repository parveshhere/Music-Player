const music = [

    {
        path: "/data/song1.mp3",
        cover_path: "/data/cover1.jpg"
    },

    {
        path: "/data/song2.mp3",
        cover_path: "/data/cover2.jpg"
    },
    {
        path: "/data/song3.mp3",
        cover_path: "https://i.ytimg.com/vi/2KsrtJ3VtZs/maxresdefault.jpg"
    },
    {
        path: "/data/song4.mp3",
        cover_path: "https://i.ytimg.com/vi/wz7fnQMmABg/maxresdefault.jpg"
    },
]
var i = 0;
var playing = false;
var cover = document.querySelector("#cover");
var button = document.getElementById('play-btn');
var previous = document.querySelector(".previous");
var next = document.querySelector(".next");
var audio = new Audio(music[i].path);


previous.addEventListener("click", () => {
    button.innerHTML = '<span class="iconify" data-icon="ant-design:play-circle-filled"></span>';
    playing = false;
    audio.pause();
    if (i > 0) {
        i--;
        cover.src = music[i].cover_path;
        audio = new Audio(music[i].path);
    }
})
next.addEventListener("click", () => {
    button.innerHTML = '<span class="iconify" data-icon="ant-design:play-circle-filled"></span>';
    playing = false;
    audio.pause();
    if (i < music.length - 1) {
        i++;
        cover.src = music[i].cover_path;
        audio = new Audio(music[i].path);
    }
})

button.addEventListener("click", () => {

    if (!playing) {
        audio.play();
        button.innerHTML = '<span class="iconify" data-icon="ant-design:pause-circle-filled"></span>';
        playing = true;
    }
    else {
        button.innerHTML = '<span class="iconify" data-icon="ant-design:play-circle-filled"></span>';
        audio.pause();
        playing = false;
    }
});
