import AppDispatcher from "../AppDispatcher";
import {Course} from "../CoursesPage";
import {saveCourse} from "../api/courseApi";
import ActionTypes from "./ActionTypes";
import {Promise} from "q";

export default class CourseActions {

    private dispatcher: AppDispatcher<{}> = AppDispatcher.getInstance();

    saveCourse(course: Course) {
        return saveCourse(course).then(response => this.dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COURSE,
            course: response
        }));
    }
}