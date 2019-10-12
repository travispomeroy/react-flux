import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./infrastructure/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import PageNoteFound from "./PageNoteFound";
import ManageCoursePage from "./ManageCoursePage";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={PageNoteFound} />
      </Switch>
    </div>
  );
};

export default App;
