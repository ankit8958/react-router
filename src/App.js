import logo from './logo.svg';
import './App.css';
import {Route,Routes,Navigate} from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';
import NavBar from './Component/NavBar';
import Service from './Component/Service';
import Users from './Component/Users';
import Search from './Component/Search';
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<About name='ankit'/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      {/* <Route path='/search' element={<Search/>}/> */}
      <Route exact path='/users/:fname/:lname' element={<Users/>}/>
      {/* <Route path="*" element={<Error/>}/>  */}
      <Route path="*" element={<Navigate to ="/" />}/>
      
    </Routes>
    </>
  );
}

export default App;