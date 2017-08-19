import EditPlan from '../Components/EditPlan';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    images: state.session.images
  };
}

function mapDispatchToProps(dispatch) {
  return { };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPlan);
