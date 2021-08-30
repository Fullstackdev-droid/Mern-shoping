// import lib
import isEmpty from './isEmpty';

export const firstLetterCase = (value) => {
    if (!isEmpty(value)) {
        return value.charAt(0).toUpperCase();
    }
    return ''
}