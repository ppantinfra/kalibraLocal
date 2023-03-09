import moment from 'moment';
const formatDate = (
    date: any
): any => {
    const formattedDate = moment(date).format('DD-MMM-YY');
    return formattedDate;
};

const formatDateTime = (
    date: any
): any => {
    const formattedDate = moment(date).format('DD-MMM-YY | hh:mm a');
    return formattedDate;
};

const DateFormatterHelper = {
    formatDate,
    formatDateTime
};

export default DateFormatterHelper;