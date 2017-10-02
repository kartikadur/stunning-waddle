import moment from 'moment';

export const dateFilter = (date, format = 'MMMM YYYY') => moment(date).format(format);

export { dateFilter as default };
