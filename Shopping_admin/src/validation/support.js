// import lib
import isEmpty from '../lib/isEmpty';

export const addCategoryValid = value => {
    let errors = {};
    if (isEmpty(value.categoryName)) {
        errors.categoryName = "Required"
    }

    return errors;
}

export const editCategoryValid = value => {
    let errors = {};

    if (isEmpty(value.categoryName)) {
        errors.categoryName = "Required"
    }

    return errors;
}


export const replyValidation = value => {
    let errors = {};

    if (isEmpty(value.message)) {
        errors.message = "Required"
    }

    return errors;
}
