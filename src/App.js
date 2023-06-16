import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components here
import AdminLogin from './components/Admin/AdminLogin';
import Users from './components/Admin/Users';
import Invites from './components/Admin/Invites';
import Trainings from './components/Admin/Trainings';

import EmployeeLogin from './components/Employee/EmployeeLogin';
import AvailableTrainings from './components/Employee/AvailableTrainings';
import MyGrades from './components/Employee/MyGrades';

import ManagerLogin from './components/Company/ManagerLogin';
import CompanyGrades from './components/Company/MyGrades';
import Config from './components/Company/Config';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/invites" element={<Invites />} />
        <Route path="/admin/trainings" element={<Trainings />} />

        <Route path="/employee/login" element={<EmployeeLogin />} />
        <Route path="/employee/trainings" element={<AvailableTrainings />} />
        <Route path="/employee/grades" element={<MyGrades />} />

        <Route path="/company/login" element={<ManagerLogin />} />
        <Route path="/company/grades" element={<CompanyGrades />} />
        <Route path="/company/config" element={<Config />} />

        {/* You can add a default route that redirects users to a desired page */}
        <Route path="*" element={<EmployeeLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
