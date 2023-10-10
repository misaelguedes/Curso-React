import {BrowserRouter} from 'react-router-dom'

import RoutesApp from './Routes'
import AuthProvider from './pages/contexts/auth'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp/>
      </AuthProvider>
    </BrowserRouter>
  )
}