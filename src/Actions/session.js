import Api from '../Services/Api';

const imageHost = 'https://s3-us-west-2.amazonaws.com/serverless-bpg-image-handler';

function concatUrl(image) {
  return {
    ...image,
    filename: `${imageHost}/${image.filename}`
  };
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
      console.log(res.body)
      const imageLocations = res.body.map(concatUrl);
      dispatch({type: 'FETCH_IMAGELOCATION_SUCCESS', body: imageLocations});
    })
  }
}

export function setSelection(selection) {
  return dispatch => {
    dispatch({type: 'SET_SELECTION', selection})
  }
}

export function updateImageData(imageData) {
  return dispatch => {
    Api.put(`image-data`, {...imageData}).then(res => {
      console.log(res.body)
      dispatch({type: 'IMAGE_DATA_UPDATED', body: res.body})
    })
  }
}
