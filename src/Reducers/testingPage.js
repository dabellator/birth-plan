import update from 'react-addons-update';

const defaultState = {
  images: []
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_IMAGES':
      return update(state, { images: {$set: action.images} })
    default:
      return state;
  }
}
