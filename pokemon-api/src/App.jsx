import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'

import Nav from './components/Nav'
import Spinner from 'react-bootstrap/Spinner'

function App() {

  const navigation = useNavigation()

  return (
    <>
      <Nav />
      <main>
        {navigation.state === 'idle' ?
          <Outlet />
          :
          
             <Spinner className='spinner' animation="border" variant="danger" />
         
        }
      </main>
    </>
  )
}

export default App
