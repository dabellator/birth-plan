import update from 'react-addons-update';

const defaultState = {
  images: []
};

export default function (state = defaultState, action) {
  console.log('action', action)
  console.log('state', state)
  switch (action.type) {
    case 'FETCH_IMAGES':
      return update(state, { images: {$set: action.images} })
    default:
      return state;
  }
}
