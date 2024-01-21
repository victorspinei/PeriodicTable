import { useEffect, useRef } from "react";
import PropTypes from 'prop-types'
import "./Modal.css"

function Modal({ openModal, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal} className="dialog">
      {children}
      <button onClick={closeModal}>Close</button>
    </dialog>  
  )
}

Modal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal;
