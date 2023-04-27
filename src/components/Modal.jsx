import { AiOutlineClose } from 'react-icons/ai';

function Modal({ open, children, onClose }) {
  return (
    <div className={`modal ${open ? 'modal-open' : null}`}>
      <div className='modal-box'>
        <div className='flex justify-end mb-4'>
          <button onClick={onClose} className="p-2 bg-neutral rounded-lg">
            <AiOutlineClose className="h-5 w-5"/>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
