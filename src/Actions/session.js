import Api from '../Services/Api';

const imageHost = 'https://s3-us-west-2.amazonaws.com/serverless-bpg-image-handler';

function concatUrl(image) {
  return {
    ...image,
    location: `${imageHost}/${image.filename}`
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
    Api.get('/imageData').then(res => {
      const imageLocations = res.body.map(concatUrl).sort((current, next) => {
        return parseInt(current.iconOrder, 10) > parseInt(next.iconOrder, 10) ? 1 : -1;
      }).filter(iconData => iconData.iconOrder > 0);
      dispatch({type: 'FETCH_IMAGELOCATION_SUCCESS', body: imageLocations});
    })
  }
}

export function setSelection(selection) {
  return dispatch => {
    dispatch({type: 'SET_SELECTION', selection})
  }
}

export function updateForm(formValues) {
  return dispatch => dispatch({type: 'UPDATE_FORM', ...formValues})
}

export function updateImageData(imageData) {
  return dispatch => {
    Api.put(`imageData`, {...imageData}).then(res => {
      dispatch({type: 'IMAGE_DATA_UPDATED', body: res.body})
    })
  }
}
