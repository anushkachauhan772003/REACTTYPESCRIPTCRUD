import { Outlet,Link } from 'react-router-dom'

import './App.css';
const App: React.FC = () => {
return (
    <>
    <nav>
      <ul>
        <li><Link to="/Home">Home</Link></li>
         <li><Link to="/Contactus">Contactus</Link></li>
          <li><Link to="/Listperson">ListPerson</Link></li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default App
