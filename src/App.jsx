import { IconStyle } from './assets/iconfont/iconfont'
import { GlobalStyle } from './style'
import RouterPart from './routes'
import { useRoutes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store/index'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <IconStyle />
      <RouterPart />
    </Provider>
  )
}

export default App
