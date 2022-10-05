import {
  SiHtml5,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiCss3,
  SiGit
} from 'react-icons/si'

import Costs from '../img/Costs.png'
import MoviesLib from '../img/MoviesLib.png'
import RPG from '../img/RPG.gif'
import Gallery from '../img/Gallery.gif'
import Urna from '../img/Urna.gif'

import { ProjectCard } from './ProjectCard'

import '../styles/components/projects.sass'

export const Projects = () => {

  const icons = [
    {id: "typescript", typescript: <SiTypescript />},
    {id: "javascript", javascript: <SiJavascript />},
    {id: "react", react: <SiReact />},
    {id: "css3", css3: <SiCss3 />},
    {id: "html5", html5: <SiHtml5 />},
    {id: "styledcomponents", styledcomponents: <SiStyledcomponents />},
    {id: "git", git: <SiGit />},
  ]

  return(
    <section>
      <h2 id="subtitle">Projetos</h2>
      <p>Aqui está alguns de meus projetos</p>
      <div className="projects-container">
        <ProjectCard 
          img={MoviesLib}
          title="MoviesLib"
          icons={icons.map((icon) => (
            <div key={icon.id}>{icon.javascript}{icon.react}</div>
          ))}
          url="https://github.com/carloseduardob94/MoviesLib"
        />
        <ProjectCard 
          img={Costs}
          title="Costs"
          icons={icons.map((icon) => (
            <div key={icon.id}>{icon.javascript}{icon.react}</div>
          ))}
          url="https://github.com/carloseduardob94/costs"
        />
        <ProjectCard 
          img={RPG}
          title="RPG React"
          icons={icons.map((icon) => (
            <div key={icon.id}>{icon.typescript}{icon.react}</div>
          ))}
          url="https://github.com/carloseduardob94/rpg-react"
        />
          <ProjectCard 
            img={Gallery}
            title="Gallery"
            icons={icons.map((icon) => (
              <div key={icon.id}>{icon.typescript}{icon.react}</div>
            ))}
            url="https://github.com/carloseduardob94/gallery"
          />
        <ProjectCard 
          img={Urna}
          title="Urna Digital"
          icons={icons.map((icon) => (
            <div key={icon.id}>{icon.javascript}{icon.css3}{icon.html5}</div>
          ))}
          url="https://github.com/carloseduardob94/urna-digital"
        />
        <ProjectCard 
          img={Costs}
          title="Multi Formulário"
          icons={icons.map((icon) => (
            <div key={icon.id}>{icon.typescript}{icon.react}</div>
          ))}
          url="https://github.com/carloseduardob94/Multi-Formul-rio-React"
        />
      </div>
    </section>
  )
}