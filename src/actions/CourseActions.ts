import {Course} from "../CoursesPage";
import {deleteCourse, getCourses, saveCourse} from "../api/courseApi";
import ActionTypes from "./ActionTypes";
import {AppDispatcher, TypedEvent} from "../AppDispatcher";

export class SaveCourseEvent extends TypedEvent<{actionType: string; course: Course}>{}
export class LoadCourseEvent extends TypedEvent<{actionType:string; courses: Course[]}>{}
export class DeleteCourseEvent extends TypedEvent<{actionType: string; courseId: string}>{}

export default class CourseActions {

    saveCourse(course: Course) {
        return saveCourse(course).then(response => AppDispatcher.dispatch(new SaveCourseEvent({
            actionType: course.id ? ActionTypes.CREATE_COURSE : ActionTypes.UPDATE_COURSE,
            course: course
        })));
    }

    deleteCourse(courseId: string) {
        debugger;
        return deleteCourse(courseId).then(response => AppDispatcher.dispatch(new DeleteCourseEvent({
            actionType: ActionTypes.DELETE_COURSE,
            courseId: courseId
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