import '../styles/components/projectcard.sass'

export const ProjectCard = ({
  img,
  title,
  showLink = true,
  url,
  icons,
  ...rest
}) => {
  return (
    <div className="project-card" {...rest}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>Tecnologias:</h3>
      <div>{icons}</div>
      <div>
        <a target="_blank" href={url}>Repositório do Projeto</a>
      </div>
    </div>
  )
}
