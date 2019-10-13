import React from "react";
import { CoursesPageState } from "./CoursesPage";
import PropType from "prop-types";
import {Link} from "react-router-dom";
import {FluxProps} from "./App";

const CourseList: React.FC<CoursesPageState & FluxProps> = (props: CoursesPageState & FluxProps) => {
  return (
    <table className="table">
      <thead>
        <tr>
            <th>&nbsp;</th>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(value => {
          return (
            <tr key={value.id}>
                <td>
                    <button className="btn btn-outline-danger" onClick={() => props.courseActions.deleteCourse(value.id)}>Delete</button>
                </td>
              <td>
                  <Link to={`/course/${value.slug}`}>{value.title}</Link>
              </td>
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
