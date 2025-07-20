import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import CreateData from './components/CreateData';
import ReadData from './components/ReadData';
import UpdateData from './components/UpdateData';
import DeleteData from './components/DeleteData';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateData />} />
          <Route path="read" element={<ReadData />} />
          <Route path="update" element={<UpdateData />} />
          <Route path="delete" element={<DeleteData />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <button onClick={() => window.location.href = '/'}>HOME</button> */}
    </>
  );
};

export default App;
