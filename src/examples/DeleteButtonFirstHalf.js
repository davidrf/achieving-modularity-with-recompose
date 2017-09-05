import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

export default class DeleteButton extends Component {
  static propTypes = {
    onDeleteConfirm: PropTypes.func.isRequired,
  };

  state = {
    isModalOpen: false,
  }

  closeModal = () => this.setState({ isModalOpen: false })

  openModal = () => this.setState({ isModalOpen: true })

  confirm = () => {
    this.props.onDeleteConfirm();
    this.closeModal();
  }

  // CONTINUES TO ----------------------->
