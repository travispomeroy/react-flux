import React, {useEffect} from "react";
import {RouteComponentProps} from "react-router-dom";
import CourseForm from "./CourseForm";
import {Course} from "./CoursesPage";
import {getCourseBySlug, saveCourse} from "./api/courseApi";
import {toast} from "react-toastify";

type ManageCoursePageProps = RouteComponentProps<{ slug: string }>;

export interface FormErrors {
    titleErrorMessage?: string;
    authorIdErrorMessage?: string;
    categoryErrorMessage?: string;
}

const ManageCoursePage: React.FC<ManageCoursePageProps> = props => {
    const [errors, setErrors] = React.useState<FormErrors>({});
    const [course, setCourse] = React.useState<Course>({
        id: "",
        slug: "",
        title: "",
        authorId: 0,
        category: ""
    });

    useEffect(() => {
       const slug = props.match.params.slug;
       if (slug) {
           getCourseBySlug(slug).then(response => setCourse(response));
       }
    }, [props.match.params.slug]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        setCourse({...course, [e.currentTarget.name]: e.currentTarget.value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!formIsValid()) return;
        saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success("Course saved.");
        });
    };

    const formIsValid = (): boolean => {
        const errors:FormErrors = {};

        if (!course.title) errors.titleErrorMessage = "Title is required";
        if (!course.authorId) errors.authorIdErrorMessage = "Author ID is required";
        if (!course.category) errors.categoryErrorMessage = "Category is required";

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm formErrorMessages={errors} course={course} handleChange={handleChange} handleSubmit={handleSubmit} />
        </>
    );
};

export default ManageCoursePage;