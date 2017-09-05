import React from 'react';
import Modal from 'react-modal';

const addModalProps = withStateHandlers(
  // same as before
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
