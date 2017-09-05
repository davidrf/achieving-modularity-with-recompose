import { withStateHandlers } from 'recompose';

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

const EnhancedDeleteButton = addModalProps(DeleteButton);
