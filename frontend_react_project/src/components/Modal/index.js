import React from 'react';
import './index.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button> {/* Close button */}
        <div className="modal-header">
          <button className="switch-button active">Monthly</button>
          <button className="switch-button">Annually</button>
          <button className="save-button">Save 16%</button>
        </div>
        <div className="pricing-plans">
          <div className="plan free">
            <h2>FREE</h2>
            <h3>₹0/mo</h3>
            <ul>
              <li>Basic Usage Volume</li>
              <li>Supports 200+ Languages</li>
              <li>Limited Pro Features</li>
            </ul>
            <button className="subscribe-button">Subscribe</button>
          </div>
          <div className="plan pro">
            <h2>PRO</h2>
            <h3>₹691.4/mo</h3>
            <ul>
              <li>Large Usage Volume</li>
              <li>Full Access to Chat PDF</li>
              <li>Full Access to AI Presentation</li>
            </ul>
            <button className="subscribe-button">Subscribe</button>
          </div>
          <div className="plan unlimited">
            <h2>Unlimited</h2>
            <h3>₹2746.3/mo</h3>
            <ul>
              <li>Unlimited Usage Volume</li>
              <li>Unlimited Chat PDF</li>
              <li>Unlimited AI Presentation</li>
            </ul>
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
