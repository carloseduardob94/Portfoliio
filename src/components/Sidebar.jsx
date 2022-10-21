import Avatar from '../img/Photo_1.png'
import { Link } from 'react-router-dom'

import {SiJavascript, SiReact, SiSass } from 'react-icons/si'

import '../styles/components/sidebar.sass'

import Curriculo from '../../public/Edu-Dev.pdf'

import { SocialNetworks } from './SocialNetworks'
import { InformationContainer } from './InformationContainer'

export const Sidebar = () => {
  return (
    <aside id="sidebar" >
      <img src={Avatar} alt="Carlos Eduardo" />
      <p className="title" >Desenvolvedor Front-end</p>
      <SocialNetworks />
      <InformationContainer />
      <Link to={Curriculo} target="_blank" className="btn" download>Download currículo</Link>

      <footer>
          Projeto todo desenvolvido em
        <div className="icons">
         <div id="javascript"><SiJavascript /></div>
         <div id="react"><SiReact /></div>
         <div id="sass"><SiSass /></div>
        </div>
          </footer>
    </aside>
  )
}
