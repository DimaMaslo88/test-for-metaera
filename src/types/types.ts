//  archiveApplicationsTypes
export type archiveApplicationsType={
    recordingDate: string,
    dateOfOriginalDocument: string,
    numberOfOriginalDocument: string,
    nameOfOrganization: string,
    organizationGUID: string,
    document: string,
    documentGUID: string,
    typeOfDocument: string,
    status: string,
    comments: string,
    taxPeriodType: string,
    endDateOfTheTaxPeriod: string,
    postNote: string,
    originalRequestGUID: string,
    files: FilesType
}

export type FilesType = {
    fileView: string,
    downloadLink: string
}
