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
    githubLink:
      "https://github.com/OlimovN/uzbekistan",
    vercelLink: "https://uzbekistan-three.vercel.app/",
  },
  {
    title: "Amerika web site ",
    githubLink: "https://github.com/OlimovN/amerika",
    vercelLink: "https://amerika-sigma.vercel.app/",
  },
  {
    title: "Calculyator ",
    githubLink: "https://github.com/OlimovN/calculator",
    vercelLink: "https://calculator-sigma-beige.vercel.app/",
  },
  {
    title: " De Parfum",
    githubLink:"https://github.com/OlimovN/figma3",
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
    title: "Nature trip",
    githubLink: "https://github.com/OlimovN/DAVLATLAR",
    vercelLink: "https://davlatlar-lovat.vercel.app/",
  },
  {
    title: "Castway",
    githubLink: "https://github.com/OlimovN/Castaway",
    vercelLink: "https://castaway-theta.vercel.app/",
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
