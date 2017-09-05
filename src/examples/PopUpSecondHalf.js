  // instance methods above

  render() {
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        onRequestClose={this.closeModal}
        contentLabel="Modal"
      >
        <h1>You've won!</h1>
        <button onClick={this.props.onClickClaim}>Claim my prize</button>
      </Modal>
    );
  }
}
