/* eslint-disable prettier/prettier */
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Courses } from './components/Courses/Courses';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { NoMatch } from './components/NoMatch/NoMatch';

function App() {
  return (
    <div>
      <Routes>
        <Route path="courses/add" element={<CreateCourse />} />
        <Route path="courses/:id" element={<CourseInfo />} />
        <Route path="courses" element={<Courses />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
