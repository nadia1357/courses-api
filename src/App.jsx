/* eslint-disable prettier/prettier */
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import { PrivateRoute } from './components/PrivateRouter/PrivateRouter';
import { Courses } from './components/Courses/Courses';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { UpdateCourse } from './components/UpdateCourse/UpdateCourse';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { NoMatch } from './components/NoMatch/NoMatch';
import { getUser } from './selectors';

export const App = () => {
  const user = useSelector(getUser);

  return (
    <div>
      <Routes>
        <Route path="courses/add" element={<PrivateRoute userRole={user.role}><CreateCourse /></PrivateRoute>} />
        <Route path="courses/update/:id" element={<PrivateRoute userRole={user.role}><UpdateCourse /></PrivateRoute>} />
        <Route path="courses/:id" element={<CourseInfo />} />
        <Route path="courses" element={<Courses />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
