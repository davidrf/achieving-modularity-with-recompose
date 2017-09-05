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

  // CONTINUES TO ----------------------->
