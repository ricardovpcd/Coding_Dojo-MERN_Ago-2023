import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListPage } from './pages/listPage/listPage';
import { CreatePage } from './pages/createPage/createPage';
import { UpdatePage } from './pages/updatePage/updatePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListPage></ListPage>}></Route>
          <Route path='/new' element={<CreatePage></CreatePage>}></Route>
          <Route path='/edit/:id' element={<UpdatePage></UpdatePage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
