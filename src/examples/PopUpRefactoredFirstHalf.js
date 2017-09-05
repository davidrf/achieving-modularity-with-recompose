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

// CONTINUED -------------->
