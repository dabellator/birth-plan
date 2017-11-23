import update from 'react-addons-update';

const defaultState = {
  options: [],
  images: [],
  selected: {},
  name: '',
  description: ''
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

    case 'UPDATE_FORM':
      return update(state, { [action.key]: {$set: action.value}})

    default:
      return state;
  }
}
