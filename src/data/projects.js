import { faTableCells, faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { faKubernetes } from "@fortawesome/free-brands-svg-icons";

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
        id: 4,
        title: "Mythos (Not that one!) - Greek Mythology",
        description: "Greek Mythology Explorer, Developed actually with Claude Code.",
        link: "https://mythos-j5ne.vercel.app/",
        hoverColor: "#dfad25",  
        hoverIcon: faBoltLightning
    },
    {
        id: 3,
        title: "Sudoku Solver",
        description: "Visual Sudoku Solver, using Backtracking Algorithm. Implemented with Claude.",
        link: "https://jh-sudoku-solver.vercel.app/",
        hoverColor: "#4f9b53",
        hoverIcon: faTableCells
    },
];

export default projects;