import actionTypes from "../actions/actionTypes";

const initialState = {
    users: [
        {
            name : "subrata",
            mobile : "9804904308",
            status : {},
            key: "1"
        },
        {
            name : "suman",
            mobile : "7003626857",
            status : {},
            key: "2"
        },
    ]
};

export default contactReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SHOW_CONTACT :
            return state;
        case actionTypes.HIDE_CONTACT : 
        break;
        case actionTypes.BLOCK_CONTACT :
        break;
        default:
            return state;
    }
};