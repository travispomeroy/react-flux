import React from "react";
import {Course} from "./CoursesPage";

interface CourseFormProp {
    course: Course;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const CourseForm: React.FC<CourseFormProp> = props => {
    const course = props.course;

    return (
        <form>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <div className="field">
                    <input onChange={props.handleChange} id="title" type="text" name="title" className="form-control" value={course.title}/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select id="author" onChange={props.handleChange} name="authorId" value={course.authorId.toString() || ""} className="form-control">
                        <option value=""/>
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="category">Category</label>
                <div className="field">
                    <input id="category" onChange={props.handleChange} type="text" name="category" className="form-control" value={course.category}/>
                </div>
            </div>

            <input type="submit" value="Save" className="btn btn-primary"/>
        </form>
    );
};

export default CourseForm;