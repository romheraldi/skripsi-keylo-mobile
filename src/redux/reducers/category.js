import { LOAD_CATEGORY, LOADED_CATEGORY,LOADED_CATEGORIES } from "../types";

const initialState = {
    categories: [],
    category: [],
    isLoading: false,
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CATEGORY: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case LOADED_CATEGORIES: {
            return {
                ...state,
                isLoading: false,
                categories: action.payload,
            };
        }case LOADED_CATEGORY: {
            return {
                ...state,
                isLoading: false,
                category: action.payload,
            };
        }

        default: {
            return {
                ...state,
            };
        }
    }
};

export default categoryReducer;