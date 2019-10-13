import React from "react";
import {Course} from "./CoursesPage";
import TextInput from "./TextInput";
import {FormErrors} from "./ManageCoursePage";

interface CourseFormProp {
    course: Course;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    formErrorMessages: FormErrors;
}

const CourseForm: React.FC<CourseFormProp> = props => {
    const course = props.course;

    return (
        <form onSubmit={props.handleSubmit}>
            <TextInput id="title"
                       label="Title"
                       handleChange={props.handleChange}
                       value={props.course.title}
                       name="title"
                       error={props.formErrorMessages.titleErrorMessage}
            />

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select id="author" onChange={props.handleChange} name="authorId" value={course.authorId.toString() || ""} className="form-control">
                        <option value=""/>
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
                {props.formErrorMessages.authorIdErrorMessage && (
                    <div className="alert alert-danger">{props.formErrorMessages.authorIdErrorMessage}
                    </div>
                )}
            </div>

            <TextInput id="category"
                       label="Category"
                       handleChange={props.handleChange}
                       name="category"
                       value={course.category}
                       error={props.formErrorMessages.categoryErrorMessage}
            />

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
};

export default CourseForm;