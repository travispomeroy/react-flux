import {Dispatcher} from "flux";

export class TypedEvent<T> {

    constructor(public payload: T) {}
}

export type Event = TypedEvent<any>;

const dispatcherInstance: Dispatcher<Event> = new Dispatcher<Event>();

export {dispatcherInstance as AppDispatcher};