import {Course} from "../CoursesPage";
import {getCourses, saveCourse} from "../api/courseApi";
import ActionTypes from "./ActionTypes";
import {AppDispatcher, TypedEvent} from "../AppDispatcher";

export class SaveCourseEvent extends TypedEvent<{actionType: string; course: Course}>{}
export class LoadCourseEvent extends TypedEvent<{actionType:string; courses: Course[]}>{}

export default class CourseActions {

    saveCourse(course: Course) {
        return saveCourse(course).then(response => AppDispatcher.dispatch(new SaveCourseEvent({
            actionType: ActionTypes.CREATE_COURSE,
            course: course
        })));
    }

    loadCourses() {
        return getCourses().then(response => {
            debugger;
            AppDispatcher.dispatch(new LoadCourseEvent({
            actionType: ActionTypes.LOAD_COURSES,
            courses: response
        }))});
    }
}