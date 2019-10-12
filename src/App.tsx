import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./infrastructure/Header";
import CoursesPage from "./CoursesPage";

const GetPage: React.FC = () => {
  const route = window.location.pathname;
  if (route === "/about") return <AboutPage />;
  if (route === "/courses") return <CoursesPage />;
  return <HomePage />;
};

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <GetPage />
    </div>
  );
};

export default App;
