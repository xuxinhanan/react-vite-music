import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '@/views/home'
import Recommend from '@/views/recommend'
import Singers from '@/views/singers'
import Rank from '@/views/rank'
import Album from '@/components/album'
import { Navigate } from 'react-router-dom'

// const routes = [
//   {
//     path: '/',
//     element: <Home />,
//     children: [
//       {
//         path: '/',
//         element: <Navigate to={'/recommend'} />
//       },
//       {
//         path: '/recommend',
//         element: <Recommend />,
//         children: [
//           {
//             path: '/recommend/:id',
//             element: <Album />
//           }
//         ]
//       },
//       {
//         path: '/singers',
//         element: <Singers />
//       },
//       {
//         path: 'rank',
//         element: <Rank />
//       }
//     ]
//   }
// ]

function RouterPart() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route exact path="/" element={<Navigate to={'/recommend'} />} />
          <Route exact path="/ranking" element={<Rank />} />
          <Route exact path="/singers" element={<Singers />} />
          <Route exact path="/recommend" element={<Recommend />} />
          <Route exact path="/recommend/:id" element={<Album />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default RouterPart
