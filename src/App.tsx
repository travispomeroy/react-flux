import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./infrastructure/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import PageNoteFound from "./PageNoteFound";
import ManageCoursePage from "./ManageCoursePage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import CourseStore from "./stores/CourseStore";
import CourseActions from "./actions/CourseActions";

const courseStore: CourseStore = new CourseStore();
const courseActions: CourseActions = new CourseActions();

export interface FluxProps {
    courseStore: CourseStore;
    courseActions: CourseActions;
}
const App: React.FC = () => {
  return (
    <div>
        <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" render={(props) => <ManageCoursePage {...props} courseActions={courseActions} courseStore={courseStore} />} />
        <Route path="/course" render={(props) => <ManageCoursePage {...props} courseActions={courseActions} courseStore={courseStore} />} />
        <Redirect from="/about-page" to="about" />
        <Route component={PageNoteFound} />
      </Switch>
    </div>
  );
};

export default App;
