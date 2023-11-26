export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Portfolio",
    techs: ["Astro"],
    link: "https://github.com/NHKK/nhkk.github.io"
  },
  {
    title: "Dotfiles",
    techs: ["zsh", "lua", "nvim"],
    link: "https://github.com/NHKK/dotfiles"
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
