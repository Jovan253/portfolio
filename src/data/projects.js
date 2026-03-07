import { faPlaneUp, faVideo, faTableCells, faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
    {
        id: 1,
        title: "Movie Ranker",
        description: "Rank the movies you've watched.",
        link: "https://movie-ranker-seven.vercel.app/",
        hoverColor: "#c74949",
        hoverIcon: faClapperboard
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
        id: 3,
        title: "Sudoku Solver",
        description: "Visual Sudoku Solver.",
        link: "https://jh-sudoku-solver.vercel.app/",
        hoverColor: "#4f9b53",
        hoverIcon: faTableCells
    },
    {
        id: 4,
        title: "Azure Infrastructure Example",
        description: "Example of deploying infrastructure with GitHub Pipelines & Terraform.",
        link: "https://github.com/Jovan253/azure-infrastructure-example",
        hoverColor: "#a354aa",
        hoverIcon: faGithub
    },
    {
        id: 5,
        title: "AI Foundations",
        description: "Implementations of Supervised & Unsupervised Learning.",
        link: "https://github.com/Jovan253/AI-Foundations",
        hoverColor: "#a354aa",
        hoverIcon: faGithub
    },
];

export default projects;