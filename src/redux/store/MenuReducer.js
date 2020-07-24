const initialState = {
    messages: "",
    result: []
};

const MenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MENUS":
            return {
                ...state,
                messages: action.messages,
                result: action.result
            }
        default:
            return state
    }
};

export default MenuReducer