import ViewPlan from '../Components/ViewPlan';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    selected: state.session.selected
  };
}

function mapDispatchToProps(dispatch) {
  return { };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPlan);
