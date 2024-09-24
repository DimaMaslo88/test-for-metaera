import {combineReducers, legacy_createStore as createStore} from "redux";



const rootReducer=combineReducers({


})
export type StateType =ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)





// @ts-ignore
window.store = store
