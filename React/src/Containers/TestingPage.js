import { fetchImages } from '../Actions/TestingPage';
import TestingPage from '../Components/TestingPage';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    images: state.images,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchImages: () => dispatch(fetchImages())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestingPage);
