import EditPlan from '../Components/EditPlan';
import { bindActionCreators } from 'redux';
import { setSelection } from '../Actions/session';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    images: state.session.images,
    selected: state.session.selected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setSelection
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPlan);
