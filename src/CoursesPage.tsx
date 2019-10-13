import React from "react";
import { getCourses } from "./api/courseApi";
import CourseList from "./CourseList";
import {Link} from "react-router-dom";

export interface Course {
  id: string;
  title: string;
  slug: string;
  authorId: number;
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
      <Link className="btn btn-primary" to="/course">Add Course</Link>
      <CourseList courses={coursesPageState.courses} />
    </>
  );
};

export default CoursesPage;
