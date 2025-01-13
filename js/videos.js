// Coding videos data
const codingPLaylists = [
  {
    id: "PL38wFHH4qYZVs-liHzE8Ddgl4Yuewxp5g",
    ThumbnailId: "n3IKAOPwOxw",
    title: "Web Developer Path",
  },
  {
    id: "PL38wFHH4qYZX6PFTwfAdWg76taf6vsGOx",
    ThumbnailId: "w1vKPuvM9kY",
    title: "Next JS 15 Crash Course for Beginners",
  },
  {
    id: "PL38wFHH4qYZVyero0pGhcfcbnnoed8Evs",
    ThumbnailId: "RqpVdfwo1Pk",
    title: "Multi-Language site with Vue i18n",
  },
  {
    id: "PL38wFHH4qYZUdIKP9jG371N3G4kbWAg2c",
    ThumbnailId: "NZUspvmsNfw",
    title: "Listings App with Laravel, Inertia, Vue",
  },
  {
    id: "PL38wFHH4qYZXBPfRfojZqa3CKuAxYAt4V",
    ThumbnailId: "fF5MF3201aM",
    title: "TypeScript 5.5",
  },
  {
    id: "PL38wFHH4qYZUXLba1gx1l5r_qqMoVZmKM",
    ThumbnailId: "LmMJB3STuU4",
    title: "Build an API with Laravel 11",
  },
  {
    id: "PL38wFHH4qYZVOnXxcS0NMGGmUsZky6JNG",
    ThumbnailId: "qBxo6hW83jU",
    title: "Laravel, Inertia, React",
  },
  {
    id: "PL38wFHH4qYZXCW2rlBLNdHi5cv-v_qlXO",
    ThumbnailId: "iGnlmxA7oM8",
    title: "Laravel, Inertia, Vue",
  },
  {
    id: "PL38wFHH4qYZXH8Gb7PIbmyjdsWdEJLImp",
    ThumbnailId: "XTDNs4TB_lE",
    title: "Laravel 11 Crash Course",
  },
  {
    id: "PL38wFHH4qYZXWlYBmz0BoRW8zsIPJkEkS",
    ThumbnailId: "R7TDoF7JaQA",
    title: "React Crash Course",
  },
  {
    id: "PL38wFHH4qYZWwU2qVQwouYioA50378KoQ",
    ThumbnailId: "rAOuOcXz81E",
    title: "MERN Stack for Beginners",
  },
  {
    id: "PL38wFHH4qYZUFG1NyrIy1wpexOfmgKs41",
    ThumbnailId: "zW8E7s1IAbI",
    title: "Useful Tools",
  },
  {
    id: "PL38wFHH4qYZV58saqjppZpcz5gsC2g-E6",
    ThumbnailId: "scFmCO3W8G8",
    title: "Tips and Tricks",
  },
];

// gaming videos data
const gamingVideos = [
  {
    id: "bSZsPIsUws0",
    title: "2 MIN EPIC INTRO - A cinematic mashup of my game plays",
  },
  {
    id: "XorkVcXtaic",
    title: "Iden Versio Story - Star Wars Battlefront II Resurrection",
  },
  {
    id: "JiAr6ubOqZA",
    title: "Trilla, Second Sister Story - Star Wars Jedi: Fallen Order",
  },
  { id: "5snRYZQFSIc", title: "FIFA 22 - Some fun matches" },
];

// Html containers
const codingPlaylistsContainer = document.querySelector("#coding-playlists");
const gamingVideosContainer = document.querySelector("#gaming-videos");

// Create coding cards
codingPLaylists.forEach((v) => {
  codingPlaylistsContainer.innerHTML += card(
    `https://www.youtube.com/playlist?list=${v.id}`,
    `https://i.ytimg.com/vi/${v.ThumbnailId}/maxresdefault.jpg`,
    v.title
  );
});

// Create gaming cards
gamingVideos.forEach((v) => {
  gamingVideosContainer.innerHTML += card(
    `https://www.youtube.com/watch?v=${v.id}`,
    `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`,
    v.title
  );
});

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
