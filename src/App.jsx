import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Tutorial from './views/Tutorial'
import Home from './views/Home'

import { AnimatePresence } from 'framer-motion'

function App () {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path=':id' element={<Tutorial />} />
        </Route>
      </Routes>
      <Outlet />
    </AnimatePresence>
  )
}

export default App
