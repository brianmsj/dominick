import * as actions from '../actions/actions';

const initialState = {
  posts: [],
};

export default (state=initialState, action) => {
  switch (action.type) {
    case actions.FETCH_COMMENTS_SUCCESS:
      return {...state, posts: action.comments}
  }
  return state;
};
