import EditPlan from '../Components/EditPlan';
import { bindActionCreators } from 'redux';
import { setSelection, updateForm, saveForm } from '../Actions/session';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    id: state.session.id,
    images: state.session.images,
    selected: state.session.selected,
    name: state.session.name,
    description: state.session.description
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setSelection,
    updateForm,
    saveForm
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPlan);
