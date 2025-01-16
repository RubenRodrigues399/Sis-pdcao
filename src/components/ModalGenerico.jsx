export default function Modal({ children, onClose }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
            aria-label="Fechar"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  }
  