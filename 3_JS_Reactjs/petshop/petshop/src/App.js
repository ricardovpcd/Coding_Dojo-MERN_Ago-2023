import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/loginPage/loginPage';
import { RegisterPage } from './pages/registerPage/registerPage';
import { AdminPage } from './pages/adminPage/adminPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login'  element={<LoginPage></LoginPage>}/>
          <Route path='/register'  element={<RegisterPage></RegisterPage>}/>
          <Route path='/admin'  element={<AdminPage></AdminPage>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
