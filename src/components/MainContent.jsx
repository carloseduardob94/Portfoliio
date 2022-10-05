import '../styles/components/maincontent.sass'

import { About } from './About'
import { Technologies } from './Technologies'
import { Projects } from './Projects.jsx'

export const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <Technologies />
      <Projects />
    </main>
  )
}