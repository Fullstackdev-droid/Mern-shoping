import isEmpty from "./isEmpty";

export const dateFormat = (dateTime, format = 'YYYY-MM-DD') => {
    try {
        if (!isEmpty(dateTime)) {
            dateTime = new Date(dateTime);
            let year = dateTime.getFullYear(),
                month = dateTime.getMonth() + 1,
                day = dateTime.getDate();
            return format.replace('YYYY', year).replace('MM', month).replace('DD', day)
        }
    } catch (err) {
        return dateTime;
    }
}

export const timeFormat = (dateTime, format = 'HH:MM:SS') => {
    try {
        if (!isEmpty(dateTime)) {
            dateTime = new Date(dateTime);

            let hour = dateTime.getHours(),
                minute = dateTime.getMinutes(),
                second = dateTime.getSeconds();

            return format.replace('HH', hour).replace('MM', minute).replace('SS', second)
        }
    } catch (err) {
        return ''
    }
}

export const dateTimeFormat = (dateTime, format = 'YYYY-MM-DD HH:MM:SS') => {
    try {
        if (!isEmpty(dateTime)) {
            format = format.split(' ');
            return dateFormat(dateTime, format[0]) + ' ' + timeFormat(dateTime, format[1])
        }
    } catch (err) {
        return ''
    }
}