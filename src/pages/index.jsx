import Sidebar from "../components/Sidebar";
import ProjectCard from "../components/ProjectCard";
// import CursorGlow from "../components/Cursor";
import projects from "../data/projects";

export default function Home() {
  return (
    <div className="container">

      {/* <CursorGlow /> */}

      <Sidebar />

      <main className="main">

        <section className="hero">
          <h1>Jovan Hadzic</h1>
          <p>
            Problem Solver.
          </p>
        </section>

        <section className="projects">

          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

        </section>

      </main>

    </div>
  );
}