import {archiveApplicationsType} from "types/types";

export const ArchiveApplicationsState:archiveApplicationsType = {
    recordingDate: '',
    dateOfOriginalDocument: '',
    numberOfOriginalDocument: '',
    nameOfOrganization: '',
    organizationGUID: '',
    document: '',
    documentGUID: '',
    typeOfDocument: '',
    status: '',
    comments: '',
    taxPeriodType: '',
    endDateOfTheTaxPeriod: '',
    postNote: '',
    originalRequestGUID: '',
    files: {
        fileView: '',
        downloadLink: ''
    }

}


export const ArchiveApplications = (state: archiveApplicationsType=ArchiveApplicationsState, action: any):archiveApplicationsType => {
    switch (action.type) {
        default:
            return state
    }
}
