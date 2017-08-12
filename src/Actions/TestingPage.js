import Api from '../Services/Api';

const BPGRoutes = "https://e3hr1v9ebl.execute-api.us-west-2.amazonaws.com/prod";

export function fetchImages() {
  console.log('fired fetch images')
  Api.send({
    method: 'GET',
    url: `${BPGRoutes}/data/BPG-Data-images-MVLLBSNLK1D4`,
    headers: {
      Accept: 'application/json'
    }
  }).then(function(res) {
    return dispatch => {
      dispatch({ type: 'FETCH_IMAGES', images: res.body.body })
    }
  })
}
