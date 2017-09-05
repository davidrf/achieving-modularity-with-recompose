class DeleteButton extends Component {
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

const onDeleteConfirm = () => {
  console.log('deleted');
};

render(<DeleteButton onDeleteConfirm={onDeleteConfirm} />, mountNode)
