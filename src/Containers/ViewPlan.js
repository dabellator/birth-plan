import ViewPlan from '../Components/ViewPlan';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    selected: state.session.selected,
    name: state.session.name,
    description: state.session.description
  };
}

function mapDispatchToProps(dispatch) {
  return { };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPlan);
