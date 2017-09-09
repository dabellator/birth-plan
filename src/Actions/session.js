import Api from '../Services/Api';

const imageHost = 'https://s3-us-west-2.amazonaws.com/serverless-bpg-image-handler';

function concatUrl(image) {
  return `${imageHost}/${image.filename}`;
}

export function fetchAll() {
  return dispatch => {
    fetchOptions()(dispatch);
    fetchImageLocations()(dispatch);
  }
};

export function fetchOptions() {
  return dispatch => {
    Api.get('/options').then(res => {
      dispatch({type: 'FETCH_OPTIONS_SUCCESS', body: res.body});
    })
  };
};

export function fetchImageLocations() {
  return dispatch => {
    Api.get('/image-data').then(res => {
      const imageLocations = res.body.map(concatUrl);
      dispatch({type: 'FETCH_IMAGELOCATION_SUCCESS', body: imageLocations});
    })
  }
}
