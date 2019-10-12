import React from "react";
import { CoursesPageState } from "./CoursesPage";
import PropType from "prop-types";

const CourseList: React.FC<CoursesPageState> = (props: CoursesPageState) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(value => {
          return (
            <tr key={value.id}>
              <td>{value.title}</td>
              <td>{value.authorId}</td>
              <td>{value.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropType.array.isRequired
};

CourseList.defaultProps = {
  courses: []
};

export default CourseList;
