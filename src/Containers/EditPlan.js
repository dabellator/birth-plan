import EditPlan from '../Components/EditPlan';
import { bindActionCreators } from 'redux';
import { setSelection, updateForm } from '../Actions/session';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    images: state.session.images,
    selected: state.session.selected,
    name: state.session.name,
    description: state.session.description
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setSelection,
    updateForm
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPlan);
