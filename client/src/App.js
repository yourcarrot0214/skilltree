import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

function App() {
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
        </Switch>
      </Router>
    </>
  );
}

export default App;

/*
  신규 페이지 route path 연결
  Suspense 설정
   import {Suspense} from 'react';
   <Suspense fallback={LodingPage}>
    <Children Component ... />
   </Suspense>
*/
