// Coding playlists fetch url
const codingPLaylistsFetchUrl =
  "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UC1M6N5LUj3c1JhiZXiNDq3A&maxResults=9&key=AIzaSyCH2cNf3bx8304MvpRzzsqPlWCuZ67Txuc";

// Coding videos fetch url
const codingVideosFetchUrl =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=UU1M6N5LUj3c1JhiZXiNDq3A&key=AIzaSyCH2cNf3bx8304MvpRzzsqPlWCuZ67Txuc";

// Gaming videos fetch url
const gamingFetchUrl =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=bSZsPIsUws0%2CJiAr6ubOqZA%2CXorkVcXtaic%2C5snRYZQFSIc&key=AIzaSyCH2cNf3bx8304MvpRzzsqPlWCuZ67Txuc";

const codingPlaylistsContainer = document.querySelector(
  "#coding-playlists-items"
);
const codingVideosContainer = document.querySelector("#coding-video-items");
const gamingVideosContainer = document.querySelector("#gaming-video-items");

const playlistsLoader = document.querySelector("#playlists-loader");
const codingLoader = document.querySelector("#coding-loader");
const gamingLoader = document.querySelector("#gaming-loader");

getCodingPlaylists();
getCodingVideos();
getGamingVideos();

// Get coding playlists
function getCodingPlaylists() {
  playlistsLoader.classList.remove("hidden");
  fetch(codingPLaylistsFetchUrl)
    .then((res) => res.json())
    .then((data) => {
      playlistsLoader.classList.add("hidden");
      data.items.forEach((e) => {
        codingPlaylistsContainer.innerHTML += card(
          `https://www.youtube.com/playlist?list=${e.id}`,
          e.snippet.thumbnails.maxres.url,
          e.snippet.title
        );
      });
    })
    .catch((err) => {
      playlistsLoader.classList.add("hidden");
      codingPlaylistsContainer.parentNode.innerHTML += errorContainer(
        "https://www.youtube.com/@LearnWithJonVadar"
      );
    });
}

// Get coding videos
function getCodingVideos() {
  codingLoader.classList.remove("hidden");
  fetch(codingVideosFetchUrl)
    .then((res) => res.json())
    .then((data) => {
      codingLoader.classList.add("hidden");
      data.items.forEach((e) => {
        codingVideosContainer.innerHTML += card(
          `https://www.youtube.com/watch?v=${e.snippet.resourceId.videoId}`,
          e.snippet.thumbnails.maxres.url,
          e.snippet.title
        );
      });
    })
    .catch((err) => {
      codingLoader.classList.add("hidden");
      codingVideosContainer.parentNode.innerHTML += errorContainer(
        "https://www.youtube.com/@LearnWithJonVadar/videos"
      );
    });
}

// Get gaming videos
function getGamingVideos() {
  gamingLoader.classList.remove("hidden");
  fetch(gamingFetchUrl)
    .then((res) => res.json())
    .then((data) => {
      gamingLoader.classList.add("hidden");
      data.items.forEach((e) => {
        gamingVideosContainer.innerHTML += card(
          `https://www.youtube.com/watch?v=${e.id}`,
          e.snippet.thumbnails.maxres.url,
          e.snippet.title
        );
      });
    })
    .catch((err) => {
      gamingLoader.classList.add("hidden");
      gamingVideosContainer.parentNode.innerHTML += errorContainer(
        "https://www.youtube.com/@jonvadar"
      );
    });
}

// Html card
function card(link, thumbnail, title) {
  return `<a href="${link}" class="group block overflow-hidden w-full h-full rounded-3xl ring-shadow hover:text-sky-400 hover:ring-sky-400 hover:ring-2 hover:shadow-sky-400/10 my-transition" target="_blank">
            <div class=" overflow-hidden w-full">
          <img src="${thumbnail}" alt="" class="max-w-full"></div>
          <h4 class="py-6 text-lg px-4 font-medium">${title}</h4>
      </a>`;
}

// Html error
function errorContainer(channelUrl) {
  return `<a target="_blank" href="${channelUrl}" class="block mt-4 text-center font-medium text-sky-400 ring-1 ring-sky-500 rounded-3xl w-full py-3 px-8 hover:bg-sky-50 dark:hover:bg-slate-800">Content not available. Please try again later or visit the YouTube Channel directly.</a>`;
}
