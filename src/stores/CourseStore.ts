import {EventEmitter} from "events";
import AppDispatcher, {Payload} from "../AppDispatcher";
import {Course} from "../CoursesPage";
import ActionTypes from "../actions/ActionTypes";

export default class CourseStore extends EventEmitter{

    private static readonly CHANGE_EVENT = "change";

    private appDispatcher: AppDispatcher<Payload> = AppDispatcher.getInstance();
    private _courses: Course[] = [];

    constructor() {
        super();
        this.appDispatcher.register(payload => {
           switch (payload.actionType) {
               case ActionTypes.CREATE_COURSE:
                   this._courses.push(payload.course);
                   this.emitChange();
                   break;
               default:
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