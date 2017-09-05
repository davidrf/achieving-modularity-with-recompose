import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'recompose';

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

// previously was
// withRouter(connect(mapStateToProps)(addModalProps(DeleteButton)));

const enhance = compose(
  withRouter,
  connect(mapStateToProps),
  addModalProps,
);

const EnhancedDeleteButton = enhance(DeleteButton);
