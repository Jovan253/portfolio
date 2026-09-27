import { faTableCells, faBoltLightning, faMusic } from "@fortawesome/free-solid-svg-icons";
import { faKubernetes } from "@fortawesome/free-brands-svg-icons";

const projects = [
    {
        id: 1,
        title: "KubePlayground",
        description: "AWS EKS project to learn Kubernetes (manual deploy required).",
        tech: ["Kubernetes", "AWS EKS", "GitHub Actions", "Terraform", "Claude Code"],
        link: "https://github.com/Jovan253/KubePlayground/blob/main/README.md",
        hoverColor: "#a354aa",
        hoverIcon: faKubernetes
    },
    {
        id: 2,
        title: "TrackSplit",
        description: "Backing Track Generator. Upload a song, and separate it into stems.",
        tech: ["Demucs", "Modal", "Neon", "Supabase", "React", "Claude Code"],
        link: "https://music-tool-web.vercel.app/demo",
        hoverColor: "#3684ce",  
        hoverIcon: faMusic
    },
    {
        id: 4,
        title: "Mythos (Not that one!) - Greek Mythology",
        description: "Interactive explorer of Greek gods, myths, and family trees.",
        tech: ["React", "Vercel", "Claude Code"],
        link: "https://mythos-j5ne.vercel.app/",
        hoverColor: "#dfad25",  
        hoverIcon: faBoltLightning
    },
    {
        id: 3,
        title: "Sudoku Solver",
        description: "Visual Sudoku Solver, using a Backtracking Algorithm.",
        tech: ["React", "Vercel", "Claude Code"],
        link: "https://jh-sudoku-solver.vercel.app/",
        hoverColor: "#4f9b53",
        hoverIcon: faTableCells
    },
];

export default projects;