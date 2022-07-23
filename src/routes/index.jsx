import Home from '@/views/home'
import Recommend from '@/views/recommend'
import Singers from '@/views/singers'
import Rank from '@/views/rank'
import { Navigate } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Navigate to={'/recommend'} />
      },
      {
        path: '/recommend',
        element: <Recommend />
      },
      {
        path: '/singers',
        element: <Singers />
      },
      {
        path: 'rank',
        element: <Rank />
      }
    ]
  }
]

export default routes
