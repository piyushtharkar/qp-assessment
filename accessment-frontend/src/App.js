import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import RegisterComponent from './components/RegisterComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import AddGroceryComponent from './components/AddGroceryComponent';
import UpdateGroceryComponent from './components/UpdateGroceryComponent';
function App() {
  return (
    <div className="App">
   <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route path = "/" element = { <RegisterComponent /> }></Route>
              <Route path = "/register" element = { <RegisterComponent /> }></Route>
              <Route path='/login' element = { <LoginComponent /> }></Route>
              <Route path='/home' element = { <HomeComponent /> }></Route>
              {/* <Route path='/add-grocery' element = { <AddGroceryComponent /> }></Route> */}
              <Route path='/update-grocery' element = { <UpdateGroceryComponent /> }></Route>
            </Routes>
        </div>
        <FooterComponent />
        </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
