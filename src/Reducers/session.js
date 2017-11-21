import update from 'react-addons-update';

const defaultState = {
  options: [],
  images: [],
  selected: {}
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_OPTIONS_SUCCESS':
      return update(state, { options: {$set: action.body} })

    case 'FETCH_IMAGELOCATION_SUCCESS':
      return update(state, { images: {$set: action.body} })

    case 'SET_SELECTION':
      return update(state, { selected: {$apply: selected => {
        selected[action.selection] = selected[action.selection] ? !selected[action.selection] : 'true';
        return selected;
      }}})

    default:
      return state;
  }
}
