import React from "react";
import {RouteComponentProps} from "react-router-dom";
import CourseForm from "./CourseForm";
import {Course} from "./CoursesPage";

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


    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} handleChange={handleChange}/>
        </>
    );
};

export default ManageCoursePage;