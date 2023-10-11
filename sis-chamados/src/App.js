import {BrowserRouter} from 'react-router-dom'

import RoutesApp from './Routes'
import AuthProvider from './pages/contexts/auth'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000}/>
        <RoutesApp/>
      </AuthProvider>
    </BrowserRouter>
  )
}