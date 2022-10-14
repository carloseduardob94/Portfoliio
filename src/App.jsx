import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'

import './styles/components/app.sass'
import { Projects } from './components/Projects'

function App() {

  return (
    <div>
    <div id="portfolio">
      <div>
        <h1>Carlos Eduardo</h1>
      </div>
      <Sidebar />
      <MainContent />
    </div>
      <div className="project-content">
        <Projects />
      </div>
    </div>
  )
}

export default App
