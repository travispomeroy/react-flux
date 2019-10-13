import React from "react";
import {RouteComponentProps} from "react-router-dom";
import CourseForm from "./CourseForm";
import {Course} from "./CoursesPage";
import {saveCourse} from "./api/courseApi";

type ManageCoursePageProps = RouteComponentProps<{ slug: string }>;

const ManageCoursePage: React.FC<ManageCoursePageProps> = props => {
    const [course, setCourse] = React.useState<Course>({
        id: "",
        slug: "",
        title: "",
        authorId: 0,
        category: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        setCourse({...course, [e.currentTarget.name]: e.currentTarget.value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        saveCourse(course).then(() => props.history.push("/courses"));
    };

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} handleChange={handleChange} handleSubmit={handleSubmit} />
        </>
    );
};

export default ManageCoursePage;