import { IconStyle } from './assets/iconfont/iconfont'
import { GlobalStyle } from './style'
import routes from './routes'
import { useRoutes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {useRoutes(routes)}
    </div>
  )
}

export default App
