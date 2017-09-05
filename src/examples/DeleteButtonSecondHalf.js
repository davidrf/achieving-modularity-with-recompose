  // instance methods above

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Delete</button>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
        >
          <h1>Are you sure?</h1>
          <button onClick={this.confirm}>Yaas</button>
          <button onClick={this.closeModal}>Nope</button>
        </Modal>
      </div>
    );
  }
}
