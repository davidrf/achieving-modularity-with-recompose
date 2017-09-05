import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  // do the thing
};

const addModalProps = withStateHandlers(
  { isModalOpen: false },
  {
    closeModal: (state, props) => () => ({ isModalOpen: false }),
    openModal: (state, props) => () => ({ isModalOpen: true }),
  }
);

class DeleteButton extends Component {
  // same as before
}

const EnhancedDeleteButton = withRouter(connect(mapStateToProps)(addModalProps(DeleteButton)));
