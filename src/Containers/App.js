import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../Components/App';
import { fetchAll } from '../Actions/session';

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAll
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
