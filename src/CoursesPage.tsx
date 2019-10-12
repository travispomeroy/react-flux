import React from "react";
import { getCourses } from "./api/courseApi";
import CourseList from "./CourseList";

export interface Course {
  id: string;
  title: string;
  slug: string;
  authorId: bigint;
  category: string;
}

export interface Author {
  id: bigint;
  name: string;
}

export interface CoursesPageState {
  courses: Course[];
}

const CoursesPage: React.FC = () => {
  const [coursesPageState, setCoursesPageState] = React.useState<
    CoursesPageState
  >({ courses: [] });

  React.useEffect(() => {
    getCourses().then(value => setCoursesPageState({ courses: value }));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={coursesPageState.courses} />
    </>
  );
};

export default CoursesPage;
