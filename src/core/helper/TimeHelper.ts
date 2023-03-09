export const  minutesToHours = (minutes: number) => {
    const mins = Math.floor(minutes);
    const remainder = Math.floor(mins % 60);
    const quotient = Math.floor(mins / 60);
    if ( remainder === 0 ) {
        return `${quotient}:00`;
    } else if (remainder < 10) {
        return `${quotient}:0${remainder}`;
    } else {
        return `${quotient}:${remainder}`;
    }
};



