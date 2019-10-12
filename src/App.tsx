import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./infrastructure/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch } from "react-router-dom";
import PageNoteFound from "./PageNoteFound";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNoteFound} />
      </Switch>
    </div>
  );
};

export default App;
