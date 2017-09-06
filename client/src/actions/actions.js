
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const fetchCommentsSuccess = (comments) => ({
    type: FETCH_COMMENTS_SUCCESS,
    comments
});

export const FETCH_COMMENTS_FAILURE = 'FETCH_Comments_FAILURE';
export const fetchCommentsFailure = (error) => ({
    type: FETCH_COMMENTS_FAILURE,
    error,
});

export const fetchComments = () => dispatch => {
  return fetch('/api/comment')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    dispatch(fetchCommentsSuccess(json));
  })
  .catch(error => {
    dispatch(fetchCommentsFailure());
  });
};


export const postComments = (data) => dispatch => {
  return fetch(`/api/comment`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(json => {
    })
    .catch(error => {
      console.error(error);
    });

};
