import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginMain from './pages/login/LoginMain';
import LoginEmployer from './pages/login/LoginEmployer';
import LoginEmpowerer from './pages/login/LoginEmpowerer';
import LoginWorkforce from './pages/login/LoginWorkforce';
import SignupMain from './pages/signup/SignupMain';
import SignupEmployer from './pages/signup/SignupEmployer';
import SignupEmpowerer from './pages/signup/SignupEmpowerer';
import SignupWorkforce from './pages/signup/SignupWorkforce';
import Employer from './hirecandidates/Employer';
import Workforce from './hirecandidates/Workforce';
import Empowerer from './hirecandidates/Empowerer';
import Empowerer2 from './hirecandidates/Empowerer2';
import CompanyInfoEmployer from './company information/CompanyInfoEmployer';
import CompanyInfoWorkforce from './company information/CompanyInfoWorkforce';
import CompanyInfoEmpowerer from './company information/CompanyInfoEmpowerer';
import CompanyProfileEmployer from './companyprofile/CompanyProfileEmployer';
import CompanyProfileEmployer2 from './companyprofile/CompanyProfileEmployer2';
import CompanyProfileWorkforce from './companyprofile/CompanyProfileWorkforce';
import CreateVacancy from './createvacancy/CreateVacancy';
import VacancyPage from "./Vacancy Page/VacancyPage";
import VacancyPageWorkforce from './Vacancy Page/VacancyPageWorkforce';
import Notification from "./Notification/Notification";
import NotificationWorkforce from './Notification/NotificationWorkforce';
import Messages from "./Messages/Messages";
import MessagesWorkforce from './Messages/MessagesWorkforce';
import ViewApplicants from './ViewApplicants/ViewApplicants';
import EmployerMode from './Empowerer company profile/EmployerMode';
import WorkforceMode from './Empowerer company profile/Workforcemode';
import WorkforceAddEmployees from './Workforce Add Employees/WorkforceAddEmployees';
import ApplicantsProfile from './applicantsProfile/applicantsprofile';
import EmployeesProfileEmployer from './Employees profile/EmployeesProfileEmployer';
import EmployeesProfileWorkforce from './Employees profile/EmployeesProfileWorkforce';
import CompanyDescription from './Company Description/CompanyDescription';
import WorkforceApply from './WorkforceApply/WorkforceApply';
import WorkforceEmployees from './WorkforceEmployees/WorkforceEmployees';
import WorkforceList from './List/WorkforceList';
import './index.css';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "loginMain",
        element: <LoginMain />,
    },
    {
        path: "loginEmployer",
        element: <LoginEmployer />,
    },
    {
        path: "loginEmpowerer",
        element: <LoginEmpowerer />,
    },
    {
        path: "loginWorkforce",
        element: <LoginWorkforce />,
    },
    {
        path: "signupMain",
        element: <SignupMain />,
    },
    {
        path: "signupEmployer",
        element: <SignupEmployer />,
    },
    {
        path: "signupEmpowerer",
        element: <SignupEmpowerer />,
    },
    {
        path: "signupWorkforce",
        element: <SignupWorkforce />,
    },
    {
        path:"EmployerDirection",
        element:<Employer />
    },
    {
        path:"WorkforceDirection",
        element:<Workforce />
    },
    {
        path:"EmpowererDirection",
        element:<Empowerer />
    },
    {
        path:"Empowerer2Direction",
        element:<Empowerer2 />
    },
    {
        path:"CompanyInfoEmployer",
        element:<CompanyInfoEmployer/>
    },
    {
        path:"CompanyInfoWorkforce",
        element:<CompanyInfoWorkforce/>
    },
    {
        path:"CompanyInfoEmpowerer",
        element:<CompanyInfoEmpowerer/>
    },
    {
        path:"CompanyProfileEmployer",
        element:<CompanyProfileEmployer/>
    },
    {
        path:"CompanyProfileEmployer2",
        element:<CompanyProfileEmployer2/>
    },
    {
        path:"CompanyProfileWorkforce",
        element:<CompanyProfileWorkforce/>
    },
    {
        path:"CreateVacancy",
        element:<CreateVacancy/>
    },
    {
        path:"VacancyPage",
        element:<VacancyPage/>
    },
    {
        path:"VacancyPageWorkforce",
        element:<VacancyPageWorkforce/>
    },
    {
        path:"Notification",
        element:<Notification/>
    },
    {
        path:"NotificationWorkforce",
        element:<NotificationWorkforce/>
    },
    {
        path:"Messages",
        element:<Messages/>
    },
    {
        path:"MessagesWorkforce",
        element:<MessagesWorkforce/>
    },
    {
        path:"ViewApplicants",
        element:<ViewApplicants/>
    },
    {
        path:"EmployerMode",
        element:<EmployerMode/>
    },
    {
        path:"WorkforceMode",
        element:<WorkforceMode/>
    },
    {
        path:"WorkforceAddEmployees",
        element:<WorkforceAddEmployees/>
    },
    {
        path:"ApplicantsProfile",
        element:<ApplicantsProfile/>
    },
    {
        path:"EmployeesProfileEmployer",
        element:<EmployeesProfileEmployer/>
    },
    {
        path:"EmployeesProfileWorkforce",
        element:<EmployeesProfileWorkforce/>
    },
    {
        path:"CompanyDescription",
        element:<CompanyDescription/>
    },
    {
        path:"WorkforceApply",
        element:<WorkforceApply/>
    },
    {
        path:"WorkforceEmployees",
        element:<WorkforceEmployees/>
    },
    {
        path:"WorkforceList",
        element:<WorkforceList/>
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} />
);