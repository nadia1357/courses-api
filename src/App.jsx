/* eslint-disable prettier/prettier */
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { NoMatch } from './components/NoMatch/NoMatch';

function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        {/*<Route index element={<Registration />} />
        <Route path="registration" element={<Registration />} />
  <Route path="login" element={<Login />} />*/}
        <Route path="/" element={<Courses />} />
        <Route path="create-course" element={<CreateCourse />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
