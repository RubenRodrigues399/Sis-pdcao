
import React, { useEffect } from 'react';

interface PopupProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Fecha o popup após 3 segundos
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-10 left-1/2 transform -translate-x-1/2 p-4 rounded ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      } text-white`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Popup;











{/*
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

interface PopupProps {
  message: string;
  type: 'success' | 'error';
  redirectTo?: string;
}

const Popup: React.FC<PopupProps> = ({ message, type, redirectTo }) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(true);

  useEffect(() => {
    if (redirectTo) {
      setTimeout(() => {
        router.push(redirectTo);
      }, 2000); 
    }

    const timer = setTimeout(() => {
      setIsVisible(false); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [redirectTo, router]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: type === 'success' ? 'green' : 'red',
        color: 'white',
        borderRadius: '5px',
        zIndex: 9999,
      }}
    >
      <p>{message}</p>
    </div>
  );
};

export default Popup;

 */}
