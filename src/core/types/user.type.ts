export interface IUser {
    username?: string,
    email?: string,
    password?: string,
    showPassword?: boolean,
    kalibraCode?: string,
    confirmPassword?: string,
    firstName?: string,
    lastName?: string,
    nickname?: string,
    gender?: string,
    birthdate?: string,

}
interface MetricField {
    Bodyweight?: string,
    Steps?: string,
    SleepHours?: string,
    CaloriesIn?: string,
    CaloriesOut?: string,
    WaterIntake?: string,
}

export interface IClient {
    cognitoId?: string,
    name?: string,
    email?: string,
    password?: string,
    showPassword?: boolean,
    nickname?: string,
    gender?: string,
    birthdate?: string,
    // Bodyweight?: string,
    // Steps?: string,
    // SleepHours?: string,
    // CaloriesIn?: string,
    // CaloriesOut?: string,
    // WaterIntake?: string,
    MetricReport?: MetricField[]
}


interface IHealthMarkers {
    healthMarkerId?: string | any,
    value?: number | string | any
}

interface IComments {
    groupId?: string | any,
    comment?: number | string | any,
    color?: string | any
}


export interface IReport {
    reportType?: string | any,
    sourceType?: string | any,
    sourceDate?: string | any,
    healthMarkers?: IHealthMarkers[] | any,
    comments?: IComments[] | any,

    // healthMarkers?: [{
    //     healthMarkerId?: string | number,
    //     value?: string
    // }],
    // comments?: [
    //     {
    //         groupId?: string | number,
    //         comment?: string,
    //         color?: string
    //     }
    // ],
    userAction?: string | any,
    cognitoId?: string | any
}
