import React, { Component } from 'react';

const addModalProps = BaseComponent => {
  return class extends Component {
    state = {
      isModalOpen: false,
    }

    closeModal = () => this.setState({ isModalOpen: false })

    openModal = () => this.setState({ isModalOpen: true })

    render() {
      return (
        <BaseComponent
          {...this.props}
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          openModal={this.openModal}
        />
      );
    }
  }
};
