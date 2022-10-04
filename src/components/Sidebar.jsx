import Avatar from '../img/Photo_1.png'

import '../styles/components/sidebar.sass'

import { SocialNetworks } from './SocialNetworks'

export const Sidebar = () => {
  return (
    <aside id="sidebar" >
      <img src={Avatar} alt="Carlos Eduardo" />
      <p className="title" >Desenvolvedor Front-end</p>
      <SocialNetworks />
      <p>Informações de contato</p>
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}