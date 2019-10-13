import {EventEmitter} from "events";

import {Course} from "../CoursesPage";
import {LoadCourseEvent, SaveCourseEvent} from "../actions/CourseActions";
import {AppDispatcher, Event} from "../AppDispatcher";

export default class CourseStore extends EventEmitter{

    private static readonly CHANGE_EVENT = "change";
    private _courses: Course[] = [];

    constructor() {
        super();
        AppDispatcher.register((action: Event) => {
            if (action instanceof SaveCourseEvent) {
                const {payload} = action;
                this._courses.push(payload.course);
                this.emitChange();
            } else if (action instanceof LoadCourseEvent) {
                debugger;
                const {payload} = action;
                this._courses = payload.courses;
                this.emitChange();
            }
        });
    }

    addChangeListener(callback: (...args: any[]) => void) {
        this.on(CourseStore.CHANGE_EVENT, callback);
    }

    removeChangeListener(callback: (...args: any[]) => void) {
        this.removeListener(CourseStore.CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CourseStore.CHANGE_EVENT);
    }

    get courses(): Course[] {
        return this._courses;
    }

    getCourseBySlug(slug: string): Course {
        const find = this._courses.find(x => x.slug === slug);
        if (find) {
            return find;
        }
        return {slug: "", category: "", authorId: 0, title: "", id: ""};
    }
}