import React from "react";
import { Switch, Route } from "react-router-dom";

import MainLayout from "../components/Layouts/MainLayout";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import ArchCvSample from "../components/Projects/Front-end Projects/ArchCvSample";
import MyCv from "../components/Projects/Front-end Projects/MyCv";
import ProfileInternTask from "../components/Projects/Front-end Projects/ProfileInternTask";

const MainCv = (props) => {
  return (
    <MainLayout>
      <Switch>
        <Route
          path="/projects/html-css-js/profile-intern-task"
          component={ProfileInternTask}
        />

        <Route path="/projects/react/my-cv" component={MyCv} />
        <Route
          path="/projects/react/archi-cv-sample"
          component={ArchCvSample}
        />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
      </Switch>
    </MainLayout>
  );
};

export default MainCv;
