import Admin from '../Components/Admin';
import { bindActionCreators } from 'redux';
import { updateImageData } from '../Actions/session';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    icons: state.session.images
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateImageData
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
