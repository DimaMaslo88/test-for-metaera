import {combineReducers, legacy_createStore as createStore} from "redux";
import {ArchiveApplications} from "bll/reducers/archiveApplications";



const rootReducer=combineReducers({
    archiveApplications:ArchiveApplications

})
export type StateType =ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)





// @ts-ignore
window.store = store
