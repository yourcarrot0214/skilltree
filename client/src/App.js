import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSkillsDB } from "./_actions/skill_action.js";
import { getProjectList } from "./_actions/project_action.js";
import { getStudyList } from "./_actions/study_action.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage.jsx";
import LoginPage from "./components/views/LoginPage/LoginPage.jsx";
import RegisterPage from "./components/views/RegisterPage/RegisterPage.jsx";
import Auth from "./hoc/auth.js";
import SkillsMain from "./components/views/SkillsPage/SkillsMain.jsx";
import ProjectMain from "./components/views/ProjectPage/ProjectMain.jsx";
import StudyMain from "./components/views/StudyPage/StudyMain.jsx";
import AdminPage from "./components/views/AdminPage/AdminPage.jsx";
import ProfileMain from "./components/views/ProfilePage/ProfileMain.jsx";
import NavBar from "./components/views/NavBar/NavBar.jsx";
import Footer from "./components/views/Footer/Footer.jsx";
import UpdateClassForm from "./components/common/class/UpdateClassForm";
import CreateProjectForm from "./components/common/class/CreateProjectForm";
import CreateStudyForm from "./components/common/class/CreateStudyForm";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSkillsDB());
    dispatch(getProjectList());
    dispatch(getStudyList());
  });

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Auth(LandingPage, null)} />
          <Route exact path='/login' component={Auth(LoginPage, false)} />
          <Route exact path='/register' component={Auth(RegisterPage, false)} />
          <Route exact path='/skills' component={Auth(SkillsMain, null)} />
          <Route exact path='/project' component={Auth(ProjectMain, null)} />
          <Route exact path='/study' component={Auth(StudyMain, null)} />
          <Route exact path='/profile' component={Auth(ProfileMain, true)} />
          <Route exact path='/admin' component={Auth(AdminPage, true, true)} />
          <Route
            exact
            path='/project/create'
            component={Auth(CreateProjectForm, true)}
          />
          <Route
            exact
            path='/study/create'
            component={Auth(CreateStudyForm, true)}
          />
          <Route
            exact
            path='/project/update'
            component={Auth(UpdateClassForm, true)}
          />
          <Route
            exact
            path='/study/update'
            component={Auth(UpdateClassForm, true)}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
