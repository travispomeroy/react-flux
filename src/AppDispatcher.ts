import {Dispatcher} from "flux";
import {Course} from "./CoursesPage";

export interface Payload {
    actionType: string;
    course: Course;
}

export default class AppDispatcher<T> {

    private static instance: AppDispatcher<Payload>;

    private dispatcher: Dispatcher<T>;

    private constructor() {
        this.dispatcher = new Dispatcher<T>();
    }

    static getInstance() {
        if (!AppDispatcher.instance) {
            AppDispatcher.instance = new AppDispatcher();
        }

        return AppDispatcher.instance;
    }

    register(callback: (payload: T) => void): string {
        return this.dispatcher.register(callback);
    }

    unregister(id: string): void {
        this.dispatcher.unregister(id);
    }

    waitFor(ids: string[]): void {
        this.dispatcher.waitFor(ids);
    }

    dispatch(payload: T): void {
        this.dispatcher.dispatch(payload);
    }

    isDispatching(): boolean {
        return this.dispatcher.isDispatching();
    }
}