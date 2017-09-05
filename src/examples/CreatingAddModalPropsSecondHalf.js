class DeleteButton extends Component {
  static propTypes = {
    onDeleteConfirm: PropTypes.func.isRequired,
  };

  confirm = () => {
    this.props.onDeleteConfirm();
    this.props.closeModal();
  }

  render() {
    return (
      <div>
        <button onClick={this.props.openModal}>Delete</button>
        <Modal
          isOpen={this.props.isModalOpen}
          onRequestClose={this.props.closeModal}
          contentLabel="Modal"
        >
          <h1>Are you sure?</h1>
          <button onClick={this.confirm}>Yaas</button>
          <button onClick={this.props.closeModal}>Nope</button>
        </Modal>
      </div>
    );
  }
}

const EnhancedDeleteButton = addModalProps(DeleteButton);
