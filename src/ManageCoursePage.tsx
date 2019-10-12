import React from "react";
import {RouteComponentProps} from "react-router-dom";

type ManageCoursePageProps = RouteComponentProps<{ slug: string }>;

const ManageCoursePage: React.FC<ManageCoursePageProps> = props => {
    return (
        <>
            <h2>Manage Course</h2>
            {props.match.params.slug}
        </>
    );
};

export default ManageCoursePage;