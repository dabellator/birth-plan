import update from 'react-addons-update';

const defaultState = {
  options: [],
  images: []
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_OPTIONS_SUCCESS':
      return update(state, { options: {$set: action.body} })
      break;
    case 'FETCH_IMAGELOCATION_SUCCESS':

      return update(state, { images: {$set: action.body} })
      break;
    default:
      return state;
  }
}
