export type FocusDropDown = {
    name: string,
    id: number,
    order: number,
    exercises: ExcersiceDropdown[]
};

export type ExcersiceDropdown = {
    name: string,
    id: number,
    order: number,
};

export type SetType = {
    set: number,
    exerciseLoad: number,
    rep: number,
    rpe: number,
    restId: number,
    tempoId: number
    userActivityLogSetId: string,
    isDataChange: boolean
};


export type ActivityLoggerType = {
    userActivityLogs: [{
        focusId: number,
        exerciseId: number,
        focusDropdownValues:FocusDropDown[],
        excerciseDropdownValues: ExcersiceDropdown[],
        userId: string,
        isChange: boolean,
        userActivityLogSets: SetType[]

    }]
};

// export type addActivityLogType={
  
//           userActivityLogId: string,
//           userId: string,
//           exerciseId: number,
//           isDataChange:boolean,
//           userActivityLogSets: SetType[]
// }


