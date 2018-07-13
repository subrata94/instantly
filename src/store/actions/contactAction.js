import actionTypes from "../actions/actionTypes";

export const showContacts = () => {
    return {
        "type" : actionTypes.showContacts
    };
};

export const hideContacts = (mobile) => {
    return {
        "type" : actionTypes.hideContacts
    };
};

export const blockConatct = (mobile) => {
    return {
        "type" : actionTypes.blockConatct
    };
};