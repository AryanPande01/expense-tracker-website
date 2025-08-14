// components/DetailedHistory.js
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import './DetailedHistory.css';
import placeholder from '../assets/placeholder.png'; // You can use any blank image

export const DetailedHistory = () => {
  const { transactions } = useContext(GlobalContext);
  const [previewImg, setPreviewImg] = useState(null);

  // Group transactions by date
  const grouped = transactions.reduce((acc, tx) => {
    const date = new Date(tx.date || tx.id).toLocaleDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(tx);
    return acc;
  }, {});

  return (
    <div className="detailed-history-container">
      <h2>Detailed History</h2>
      <ul className="transaction-list">
        {Object.entries(grouped).map(([date, txs]) => (
          <li key={date}>
            <strong>{date}</strong>
            <ul>
              {txs.map(tx => (
                <li key={tx._id || tx.id} className="transaction-item">
                  <span><strong>{tx.text}</strong>: ${tx.amount}</span>
                  <button
                    className="img-btn"
                    onClick={e => {
                      e.stopPropagation();
                      if (tx.image) setPreviewImg(tx.image);
                      else setPreviewImg(placeholder);
                    }}
                  >
                    📷
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {previewImg && (
        <div className="modal" onClick={() => setPreviewImg(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img 
              src={previewImg} 
              alt="Transaction" 
              className="modal-img"
              onError={e => { e.target.onerror = null; e.target.src = placeholder; }}
            />
            <button onClick={() => setPreviewImg(null)} className="close-btn">Close</button>
          </div>
        </div>
      )}
      <Link to="/">
        <button className="back-btn">Back to Tracker</button>
      </Link>
    </div>
  );
};
