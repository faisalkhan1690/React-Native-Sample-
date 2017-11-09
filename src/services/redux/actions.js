
import { SET_COMMENTS } from './constants';

export const setComments = () => (dispatch: any, getState: any) => {
  const fetchData = {
    method: 'GET',
  };

};

const setCommentsList = (comments: any) => ({
  type: SET_COMMENTS,
  comments: comments,
});
