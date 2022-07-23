import { IconStyle } from './assets/iconfont/iconfont'
import { GlobalStyle } from './style'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store/index'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {useRoutes(routes)}
    </Provider>
  )
}

export default App
