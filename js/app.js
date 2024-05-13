const projects = [
  {
    title: "AkademNashr",
    githubLink: "https://github.com/OlimovN/akadem-nashr",
    vercelLink: "https://akadem-nashr-ten.vercel.app/",
  },
  {
    title: "Ansormed",
    githubLink: "https://github.com/OlimovN/imtiho",
    vercelLink: "https://imtiho-ten.vercel.app/",
  },
  {
    title: "User Cart",
    githubLink: "https://github.com/OlimovN/user-card",
    vercelLink: "https://user-card-delta.vercel.app/",
  },
  {
    title: "Quare-code",
    githubLink: "https://github.com/OlimovN/qr-code",
    vercelLink: "https://qr-code-gules-phi.vercel.app/",
  },
  {
    title: "Uzbekistan web site ",
    githubLink: "https://github.com/OlimovN/uzbekistan",
    vercelLink: "https://uzbekistan-three.vercel.app/",
  },
  {
    title: "Amerika web site ",
    githubLink: "https://github.com/OlimovN/amerika",
    vercelLink: "https://amerika-sigma.vercel.app/",
  },
  {
    title: " De Parfum",
    githubLink: "https://github.com/OlimovN/figma3",
    vercelLink: "https://figma3-rho.vercel.app/",
  },
  {
    title: "Make remote work",
    githubLink: "https://github.com/OlimovN/figma-11",
    vercelLink: "https://figma-11.vercel.app/",
  },
  {
    title: "Davlatlarga sayohat",
    githubLink: "https://github.com/OlimovN/davlatlarga-sayohat",
    vercelLink: "https://davlatlarga-sayohat.vercel.app/",
  },
  {
    title: "Calculyator ",
    githubLink: "https://github.com/OlimovN/calculator",
    vercelLink: "https://calculator-sigma-beige.vercel.app/",
  },
  {
    title: "Nature trip",
    githubLink: "https://github.com/OlimovN/DAVLATLAR",
    vercelLink: "https://davlatlar-lovat.vercel.app/",
  },
  {
    title: "Castway",
    githubLink: "https://github.com/OlimovN/Castaway",
    vercelLink: "https://castaway-theta.vercel.app/",
  },
  {
    title: "Create x | services",
    githubLink: "https://github.com/OlimovN/create-x",
    vercelLink: "https://create-x-gamma.vercel.app/",
  },
  {
    title: "Create x  ",
    githubLink: "https://github.com/OlimovN/Create-X-",
    vercelLink: "https://create-x-kappa.vercel.app/",
  },
  {
    title: "Animations",
    githubLink: "https://github.com/OlimovN/animation",
    vercelLink: "https://animation-eight-olive.vercel.app/",
  },
  {
    title: "Crowfund ",
    githubLink: "https://github.com/OlimovN/crowfund",
    vercelLink: "https://crowfund-chi.vercel.app/",
  },
  {
    title: "Exam|my team ",
    githubLink: "https://github.com/OlimovN/st254wgsrdfb",
    vercelLink: "https://exam-seven-amber.vercel.app/",
  },
  {
    title: "Amalaiyot | js",
    githubLink: "https://github.com/OlimovN/aMALIYOT-JS",
    vercelLink: "https://a-maliyot-js.vercel.app/",
  },
  {
    title: "4 - dars",
    githubLink: "https://github.com/OlimovN/vazifa-for",
    vercelLink: "https://vazifa-for.vercel.app/",
  },
  {
    title: "5 - dars",
    githubLink: "https://github.com/OlimovN/4.5---dars",
    vercelLink: "https://4-5-dars-ochre.vercel.app/",
  },
  {
    title: "6 - dars",
    githubLink: "https://github.com/OlimovN/6-dars-figma-main",
    vercelLink: "https://6-dars-figma-main.vercel.app/",
  },
  {
    title: "7 - dars",
    githubLink: "https://github.com/OlimovN/4.7-masala",
    vercelLink: "https://4-7-masala.vercel.app/",
  },
  {
    title: "8 - dars",
    githubLink: "https://github.com/OlimovN/4.8-dars",
    vercelLink: "",
  },
  {
    title: "9 - dars",
    githubLink: "https://github.com/OlimovN/4.7-masala",
    vercelLink: "https://4-8-dars-theta.vercel.app/",
  },
  {
    title: "10 - dars",
    githubLink: "",
    vercelLink: "",
  },
  {
    title: "11 - dars",
    githubLink: "https://github.com/OlimovN/11---dars",
    vercelLink: "https://11-dars-two-xi.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

  projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
