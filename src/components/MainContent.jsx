import '../styles/components/maincontent.sass'

import { About } from './About'
import { Technologies } from './Technologies'

export const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <Technologies />
    </main>
  )
}