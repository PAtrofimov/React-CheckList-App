import {
  GET_CheckTemplates_SUCCESS,
  GET_CheckTemplates_REQUEST,
  GET_CheckTemplates_FAIL
} from "../actions/CheckTemplateActions";



const initialState = {
  checkTemplates: [],
  isFetching: false,
  error: ""
};

export function checkTemplateReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CheckTemplates_REQUEST:
      return { ...state, isFetching: true, error: "" };

    case GET_CheckTemplates_SUCCESS:
      return { ...state, checkTemplates: action.payload, isFetching: false, error: "" };

    case GET_CheckTemplates_FAIL:
      return { ...state, error: action.payload.message, isFetching: false };
    default:
      return state;
  }
}
