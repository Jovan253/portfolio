import { faPlaneUp, faTableCells, faClapperboard, faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faKubernetes } from "@fortawesome/free-brands-svg-icons";

const projects = [
    {
        id: 7,
        title: "KubePlayground",
        description: "AWS EKS project to learn Kubernetes (manual deploy required).",
        link: "https://github.com/Jovan253/KubePlayground/blob/main/README.md",
        hoverColor: "#a354aa",
        hoverIcon: faKubernetes
    },
    {
        id: 3,
        title: "Sudoku Solver",
        description: "Visual Sudoku Solver.",
        link: "https://jh-sudoku-solver.vercel.app/",
        hoverColor: "#4f9b53",
        hoverIcon: faTableCells
    },
    {
        id: 4,
        title: "Mythos (Not that one - Greek Mythonlogy)",
        description: "Greek Mythology Explorer, Developed actually with Claude Code.",
        link: "https://mythos-j5ne.vercel.app/",
        hoverColor: "#dfad25",  
        hoverIcon: faBoltLightning
    },
    {
        id: 2,
        title: "Trip Checker",
        description: "Keep Track of the places you've been.",
        link: "https://trip-checker-delta.vercel.app/",
        hoverColor: "#4a67b6",
        hoverIcon: faPlaneUp
    },
    {
        id: 1,
        title: "Movie Ranker",
        description: "Rank the movies you've watched.",
        link: "https://movie-ranker-seven.vercel.app/",
        hoverColor: "#c74949",
        hoverIcon: faClapperboard
    }
];

export default projects;