import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
const Notification = () => {
  return ReactDOM.createPortal(
    <ToastContainer transition={Flip} />,
    document.querySelector('#notification')
  );
};

export default Notification;
