import React from 'react';
import Modal from 'react-modal';

const addModalProps = withStateHandlers(
  { isModalOpen: false },
  {
    closeModal: (state, props) => () => ({ isModalOpen: false }),
    openModal: (state, props) => () => ({ isModalOpen: true }),
  }
);

const openModalAfterTwoSeconds = lifecycle({
  componentDidMount() {
    setTimeout(this.props.openModal, 2000);
  }
});

const enhance = compose(
  addModalProps,
  openModalAfterTwoSeconds,
);

const PopUp = ({ closeModal, isModalOpen, onClickClaim }) => (
  <Modal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    contentLabel="Modal"
  >
    <h1>You've won!</h1>
    <button onClick={onClickClaim}>Claim my prize</button>
    <button onClick={closeModal}>Decline</button>
  </Modal>
);

const EnhancedPopUp = enhance(PopUp);
