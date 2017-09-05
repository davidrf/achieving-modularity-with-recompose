const PopUp = ({ closeModal, isModalOpen, onClickClaim }) => (
  <Modal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    contentLabel="Modal"
  >
    <h1>You've won!</h1>
    <button onClick={onClickClaim}>Claim my prize</button>
    <button onClick={closeModal}>Decline</button>
  </Modal>
);

const EnhancedPopUp = enhance(PopUp);
