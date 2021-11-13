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
import MotherNature from "../components/Projects/Front-end Projects/MotherNature";
import ProjectBoost from "../components/Projects/Programming Projects/ProjectBoost";
import ArgonAssault from "../components/Projects/Programming Projects/ArgonAssault";
import RealmRush from "../components/Projects/Programming Projects/RealmRush";
import Tetris from "../components/Projects/Programming Projects/Tetris";
import AccountingSoftware from "../components/Projects/Programming Projects/AccountingSoftware";
import ParkingSensor from "../components/Projects/Programming Projects/ParkingSensor";
import TodoApp from "../components/Projects/Other Shit/TodoApp";
import PersonManager from "../components/Projects/Other Shit/PersonManager";
import RoboFriends from "../components/Projects/Other Shit/RoboFriends";
import BgGenerator from "../components/Projects/Other Shit/BgGenerator";

const MainCv = (props) => {
  return (
    <MainLayout>
      <Switch>
        <Route
          path="/projects/html-css-js/bg-generator"
          component={BgGenerator}
        />

        <Route path="/projects/react/robo-friends" component={RoboFriends} />
        <Route
          path="/projects/react/person-manager"
          component={PersonManager}
        />

        <Route path="/projects/react/todo-app" component={TodoApp} />

        <Route
          path="/projects/cplus/arduino/parking-sensor"
          component={ParkingSensor}
        />
        <Route
          path="/projects/cplus/accounting-software"
          component={AccountingSoftware}
        />

        <Route path="/projects/cplus/tetris-game" component={Tetris} />

        <Route path="/projects/unity/realm-rush" component={RealmRush} />

        <Route path="/projects/unity/argon-assault" component={ArgonAssault} />

        <Route path="/projects/unity/project-boost" component={ProjectBoost} />
        <Route
          path="/projects/bootstrap/mother-nature"
          component={MotherNature}
        />
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
