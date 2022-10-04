import Avatar from '../img/Photo_1.png'

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
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}