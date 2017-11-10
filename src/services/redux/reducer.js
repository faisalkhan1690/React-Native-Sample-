import { SET_COMMENTS } from './constants';

const initialState = {
  comments: [],
};

const boardsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    default:
      return { ...state };
  }
};

export default boardsReducer;
