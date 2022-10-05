import Avatar from '../img/Photo_1.png'
import { Link } from 'react-router-dom'

import '../styles/components/sidebar.sass'

import { SocialNetworks } from './SocialNetworks'
import { InformationContainer } from './InformationContainer'

export const Sidebar = () => {
  return (
    <aside id="sidebar" >
      <img src={Avatar} alt="Carlos Eduardo" />
      <p className="title" >Desenvolvedor Front-end</p>
      <SocialNetworks />
      <InformationContainer />
      <Link to="../../public/Edu-Dev-PT.pdf" target="_blank" className="btn" download>Download currículo</Link>
    </aside>
  )
}