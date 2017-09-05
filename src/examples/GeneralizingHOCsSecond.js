import React from 'react';
import Modal from 'react-modal';

const addModalProps = withStateHandlers(
  // same as before
);

const openModalAfterTimeout = delay => lifecycle({
  componentDidMount() {
    setTimeout(this.props.openModal, delay);
  }
});

const enhance = compose(
  addModalProps,
  openModalAfterTimeout(2000),
);
