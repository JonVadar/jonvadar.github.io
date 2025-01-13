const codingIcon = `<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="fill-none stroke-2 stroke-slate-700 w-7 h-auto group-hover:stroke-white dark:stroke-white dark:group-hover:stroke-slate-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6 10 18.5M6.5 8.5 3 12l3.5 3.5M17.5 8.5 21 12l-3.5 3.5"
                ></path>
              </svg>`;
const gamingIcon = `<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="fill-none stroke-2 stroke-slate-700 w-7 h-auto group-hover:stroke-white dark:stroke-white dark:group-hover:stroke-slate-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.5 17.5c2.5 3.5 6.449.915 5.5-2.5-1.425-5.129-2.2-7.984-2.603-9.492A2.032 2.032 0 0 0 18.438 4H5.562c-.918 0-1.718.625-1.941 1.515C2.78 8.863 2.033 11.802 1.144 15c-.948 3.415 3 6 5.5 2.5M18 8.5l.011.01M16.49 7l.011.01M16.49 10l.011.01M15 8.5l.011.01M7 7v3M5.5 8.5h3"
                ></path>
              </svg>`;
const coffeeIcon = ` <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="fill-none stroke-2 stroke-slate-700 w-7 h-auto group-hover:stroke-white dark:stroke-white dark:group-hover:stroke-slate-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 11h2.5a2.5 2.5 0 0 1 0 5H17"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 11.6V15a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-3.4a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6ZM12 9c0-1 .714-2 2.143-2v0A2.857 2.857 0 0 0 17 4.143V3.5M8 9v-.5a3 3 0 0 1 3-3v0a2 2 0 0 0 2-2V3"
                ></path>
              </svg>`;
const githubIcon = `<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="fill-none stroke-2 stroke-slate-700 w-7 h-auto group-hover:stroke-white dark:stroke-white dark:group-hover:stroke-slate-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 20.027c-3 .973-5.5 0-7-3"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75 5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"
                ></path>
              </svg>`;

const aboutLink = [
  {
    link: "https://www.youtube.com/@LearnwithJonVadar",
    icon: codingIcon,
    desc: "Coding YouTube Channel",
  },
  {
    link: "https://www.youtube.com/@jonvadar",
    icon: gamingIcon,
    desc: "Gaming YouTube Channel",
  },
  {
    link: "https://www.buymeacoffee.com/jonvadar",
    icon: coffeeIcon,
    desc: "Support me",
  },
  {
    link: "https://github.com/JonVadar",
    icon: githubIcon,
    desc: "Github Profile",
  },
];

const aboutLinksContainer = document.querySelector("#about-links");

aboutLink.forEach((link) => {
  aboutLinksContainer.innerHTML += `<a
              href=${link.link}
              target="_blank"
              rel="external"
              class="group relative grid place-items-center w-12 h-12 bg-sky-400 ring-1 ring-sky-900/5 shadow-lg shadow-sky-500/5 outline-none rounded-full hover:bg-sky-500 my-transition"
            >
              ${link.icon}
              <span
                class="absolute top-16 left-0 rounded-full ring-shadow px-4 py-2 w-max opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                >${link.desc}</span
              >
            </a>`;
});
