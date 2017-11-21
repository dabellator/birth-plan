import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../Components/App';
import { fetchAll, fetchOptions } from '../Actions/session';

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAll,
    fetchOptions
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
