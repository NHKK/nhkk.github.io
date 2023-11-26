type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "nhkk49@gmail.com",
  title: "Hi, I’m Khanh 👋",
  description:
    "I'm fullstack developer with over *5 years* of web experience. I am currently working with *Typescript*. Outside of work I tinker with 3d printing and building keyboards.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/NHKK",
    },
  ],
};

export default presentation;
