import React from "react";
import { Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginMain from "./pages/login/LoginMain";
import LoginEmployer from "./pages/login/LoginEmployer";
import LoginEmpowerer from "./pages/login/LoginEmpowerer";
import LoginWorkforce from "./pages/login/LoginWorkforce";
import SignupMain from "./pages/signup/SignupMain";
import SignupEmployer from "./pages/signup/SignupEmployer";
import SignupEmpowerer from "./pages/signup/SignupEmpowerer";
import SignupWorkforce from "./pages/signup/SignupWorkforce";
import Employer from "./hirecandidates/Employer";
import Workforce from "./hirecandidates/Workforce";
import Empowerer from "./hirecandidates/Empowerer";
import Empowerer2 from "./hirecandidates/Empowerer2";
import CompanyInfoEmployer from "./company information/CompanyInfoEmployer";
import CompanyInfoWorkforce from "./company information/CompanyInfoWorkforce";
import CompanyInfoEmpowerer from "./company information/CompanyInfoEmpowerer";
import CompanyProfileEmployer from "./companyprofile/CompanyProfileEmployer";
import CompanyProfileEmployer2 from "./companyprofile/CompanyProfileEmployer2";
import CompanyProfileWorkforce from "./companyprofile/CompanyProfileWorkforce";
import CreateVacancy from "./createvacancy/CreateVacancy";
import VacancyPage from "./Vacancy Page/VacancyPage";
import VacancyPageWorkforce from "./Vacancy Page/VacancyPageWorkforce";
import Notification from "./Notification/Notification";
import NotificationWorkforce from "./Notification/NotificationWorkforce";
import Messages from "./Messages/Messages";
import MessagesWorkforce from "./Messages/MessagesWorkforce";
import ViewApplicants from "./ViewApplicants/ViewApplicants";
import EmployerMode from "./Empowerer company profile/EmployerMode";
import WorkforceMode from "./Empowerer company profile/Workforcemode";
import WorkforceAddEmployees from "./Workforce Add Employees/WorkforceAddEmployees";
import ApplicantsProfile from "./applicantsProfile/applicantsprofile";
import EmployeesProfileEmployer from "./Employees profile/EmployeesProfileEmployer";
import EmployeesProfileWorkforce from "./Employees profile/EmployeesProfileWorkforce";
import CompanyDescription from "./Company Description/CompanyDescription";
import WorkforceApply from "./WorkforceApply/WorkforceApply";
import WorkforceEmployees from "./WorkforceEmployees/WorkforceEmployees";
import WorkforceList from "./List/WorkforceList";
import VacancyList from "./List/VacancyList";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/loginMain" element={<LoginMain />} />
        <Route path="/loginEmployer" element={<LoginEmployer />} />
        <Route path="/loginEmpowerer" element={<LoginEmpowerer />} />
        <Route path="/loginWorkforce" element={<LoginWorkforce />} />
        <Route path="/signupMain" element={<SignupMain />} />
        <Route path="/signupEmployer" element={<SignupEmployer />} />
        <Route path="/signupEmpowerer" element={<SignupEmpowerer />} />
        <Route path="/signupWorkforce" element={<SignupWorkforce />} />
        <Route path="/EmployerDirection" element={<Employer />} />
        <Route path="/WorkforceDirection" element={<Workforce />} />
        <Route path="/EmpowererDirection" element={<Empowerer />} />
        <Route path="/Empowerer2Direction" element={<Empowerer2 />} />
        <Route path="/CompanyInfoEmployer" element={<CompanyInfoEmployer />} />
        <Route
          path="/CompanyInfoWorkforce"
          element={<CompanyInfoWorkforce />}
        />
        <Route
          path="/CompanyInfoEmpowerer"
          element={<CompanyInfoEmpowerer />}
        />
        <Route
          path="/CompanyProfileEmployer"
          element={<CompanyProfileEmployer />}
        />
        <Route
          path="/CompanyProfileWorkforce"
          element={<CompanyProfileWorkforce />}
        />
        <Route
          path="/CompanyProfileEmployer2"
          element={<CompanyProfileEmployer2 />}
        />
        <Route path="/CreateVacancy" element={<CreateVacancy />} />
        <Route path="/VacancyPage" element={<VacancyPage />} />
        <Route
          path="/VacancyPageWorkforce"
          element={<VacancyPageWorkforce />}
        />
        <Route path="/Notification" element={<Notification />} />
        <Route
          path="/NotificationWorkforce"
          element={<NotificationWorkforce />}
        />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/MessagesWorkforce" element={<MessagesWorkforce />} />
        <Route path="/ViewApplicants" element={<ViewApplicants />} />
        <Route path="/EmployerMode" element={<EmployerMode />} />
        <Route path="/WorkforceMode" element={<WorkforceMode />} />
        <Route
          path="/WorkforceAddEmployees"
          element={<WorkforceAddEmployees />}
        />
        <Route path="/ApplicantsProfile" element={<ApplicantsProfile />} />
        <Route
          path="/EmployeesProfile"
          element={<EmployeesProfileEmployer />}
        />
        <Route
          path="/EmployeesProfileWorkforce"
          element={<EmployeesProfileWorkforce />}
        />
        <Route path="/CompanyDescription" element={<CompanyDescription />} />
        <Route path="/WorkforceApply" element={<WorkforceApply />} />
        <Route path="/WorkforceEmployees" element={<WorkforceEmployees />} />
        <Route path="/WorkforceList" element={<WorkforceList />} />
        <Route path="/VacancyList" element={<VacancyList />} />

      </Routes>
      
    </div>
  );
};

export default App;

