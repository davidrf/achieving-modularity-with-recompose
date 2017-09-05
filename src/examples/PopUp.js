import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

export default class PopUp extends Component {
  static propTypes = {
    onClickClaim: PropTypes.func.isRequired,
  };

  state = {
    isModalOpen: false,
  }

  closeModal = () => this.setState({ isModalOpen: false })

  openModal = () => this.setState({ isModalOpen: true })

  componentDidMount() {
    setTimeout(this.openModal, 2000);
  }

  render() {
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        onRequestClose={this.closeModal}
        contentLabel="Modal"
      >
        <h1>You've won!</h1>
        <button onClick={this.props.onClickClaim}>Claim my prize</button>
        <button onClick={this.closeModal}>Decline</button>
      </Modal>
    );
  }
}
