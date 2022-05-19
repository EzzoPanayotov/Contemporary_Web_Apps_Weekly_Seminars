import './App.css';
import Tile from './Components/Tile';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Pages/Index';
import Students from './Pages/Students'
import CounterPage from './Pages/CounterPage';
import FormPage from './Pages/FormPage';
import LoginPage from './Pages/LoginPage';
import useAuth from './FireBase/useAuth';
import {Link} from 'react-router-dom'
import Save from './Pages/Save';

function App() {
  const {logout} = useAuth()
  ReactDOM.render(
    <Router>
      <div>
        <Tile>
            <h2><Link to = '/Index'>Home</Link></h2>
            <h2><Link to = '/Students'>Student List</Link></h2>
            <h2><Link to = '/Counter'>Counter Page</Link></h2>
            <h2><Link to = '/Register'>Register Page</Link></h2>
            <h2><Link to = '/Login'>Login Page</Link></h2>
            <h2><Link to = '/Save'>Save Page</Link></h2>
            <h2><span onClick = {() =>{logout()}}><u>Logout</u></span></h2>
        </Tile>

        <Routes>
          <Route exact path = '/Index' element = {<Index/>}/>
          <Route exact path = '/Students' element = {<Students/>}/>
          <Route exact path = '/Counter' element = {<CounterPage/>}/>
          <Route exact path = '/Register' element = {<FormPage/>}/>
          <Route exact path = '/Login' element = {<LoginPage/>}/>
          <Route exact path = '/Save' element = {<Save/>}/>
        </Routes>
      </div>
    </Router>,
    document.getElementById('root')
  );
  return null;
}

// setInterval(App, 1000)

export default App;
