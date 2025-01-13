const topics = [
  {
    name: "HTML",
    link: "https://youtu.be/n3IKAOPwOxw?si=LT_L2iiBgp1O28-x",
  },
  {
    name: "CSS",
    link: "https://youtu.be/KyadRN-xe14?si=qyAtpQEeBGuQzNvH",
  },
  {
    name: "TailwindCSS",
    link: "https://youtu.be/mOP7e0aqmgk?si=h64Kl1B9Tzn4gZi5",
  },
  {
    name: "JavaScript",
    link: "https://youtu.be/YoVO4-bN3HY?si=QdhmcxWoNhrmopTM",
  },
  {
    name: "NodeJS",
    link: "https://youtu.be/rAOuOcXz81E?si=hyfrssMgDhgoL7WK",
  },
  {
    name: "TypeScript",
    link: "https://www.youtube.com/playlist?list=PL38wFHH4qYZXBPfRfojZqa3CKuAxYAt4V",
  },
  {
    name: "ReactJS",
    link: "https://www.youtube.com/playlist?list=PL38wFHH4qYZXWlYBmz0BoRW8zsIPJkEkS",
  },
  {
    name: "NextJS",
    link: "https://www.youtube.com/playlist?list=PL38wFHH4qYZX6PFTwfAdWg76taf6vsGOx",
  },
  {
    name: "VueJS",
    link: "https://youtu.be/WSh8iiWgOLg?si=XoY1J7C5bEY4nZsc",
  },
  {
    name: "PHP",
    link: "https://youtu.be/S336mLBaVpQ?si=65G2rMuDAiz05STr",
  },
  {
    name: "Laravel",
    link: "https://www.youtube.com/playlist?list=PL38wFHH4qYZXH8Gb7PIbmyjdsWdEJLImp",
  },
];

const topicsContainer = document.querySelector("#topics-items");
topics.forEach((topic) => {
  topicsContainer.innerHTML += createTopic(topic.link, topic.name);
});

function createTopic(link, name) {
  return `<a
            href=${link}
            target="_blank"
            class="flex items-center  sm:text-xl justify-center gap-2 w-40 sm:w-48 h-12 rounded-full ring-shadow hover:text-sky-400 group"
          >${name}</a>`;
}
