import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Home() {
  return (
    <div className="container">      
      <main className="main">

        <section className="hero">
          <h1>Jovan Hadzic</h1>
          <p>
            Software Developer and DevOps/Cloud Specialist.
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