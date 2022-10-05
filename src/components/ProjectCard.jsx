import '../styles/components/projectcard.sass'

const projects = [
  {name: 'MoviesLib', image: '#', technologies: "#", link: "#"},
  {name: 'Costs', image: '#', technologies: "#", link: "#"},
  {name: 'Urna', image: '#', technologies: [], link: "#"},
  {name: 'MultiForm', image: '#', technologies: "#", link: "#"},
  {name: 'RPGReact', image: '#', technologies: "#", link: "#"},
  {name: 'Gallery', image: '#', technologies: "#", link: "#"}
]

export const ProjectCard = () => {
  return(
    <div className="project-card">
      {projects.map((project) => (
        <div>
          <img src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.technologies}</p>
          <a href={project.link}>Repositório do Projeto</a>
        </div>
      ))}
    </div>
  )
}