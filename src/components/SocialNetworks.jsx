import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/carloseduardob94-dev/" },
  { name: "github", icon: <FaGithub />, link: "https://www.github.com/carloseduardob94" },
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/carloseduardob94/" }
]

export const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a target="_blank" href={network.link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}
