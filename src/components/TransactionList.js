// import React, { useContext } from 'react';
// import { Transaction } from './Transaction';

// import { GlobalContext } from '../context/GlobalState';

// export const TransactionList = () => {
//   const { transactions } = useContext(GlobalContext);

//   return (
//     <>
//       <h3>History</h3>
//       <ul className="list">
//         {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
//       </ul>
//     </>
//   )
// }

// components/TransactionList.js

/////////
// import React, { useContext, useState } from 'react';
// import { GlobalContext } from '../context/GlobalState';

// const defaultImage = '/default-image.png'; // Place your default image in public folder

// export const TransactionList = () => {
//   const { transactions } = useContext(GlobalContext);
//   const [visibleImageId, setVisibleImageId] = useState(null);

//   return (
//     <>
//       <h3>History</h3>
//       <ul className="list">
//         {transactions.map((transaction) => (
//           <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
//             {transaction.text}
//             <span>{transaction.amount > 0 ? `+$${transaction.amount}` : `-$${Math.abs(transaction.amount)}`}</span>
//             <button className="view-btn" onClick={() => setVisibleImageId(transaction.id)}>
//               📷
//             </button>
//             {visibleImageId === transaction.id && (
//               <div className="image-preview">
//                 <img src={transaction.image || defaultImage} alt="Transaction" />
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };


// components/TransactionList.js
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const defaultImage = '/default-image.png'; // Make sure this image is in public/

export const TransactionList = () => {
  const { transactions, loading, error } = useContext(GlobalContext);
  const [visibleImages, setVisibleImages] = useState({});

  const toggleImage = (id) => {
    setVisibleImages((prev) => ({
      ...prev,
      [id]: {
        show: !(prev[id]?.show || false),
        small: prev[id]?.small || false,
      },
    }));
  };

  const toggleSize = (id) => {
    setVisibleImages((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        small: !prev[id]?.small,
      },
    }));
  };

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p style={{color: 'red'}}>Error: {error}</p>;

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          const id = transaction._id || transaction.id;
          return (
            <li key={id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
              {transaction.text}
              <span className={transaction.amount < 0 ? 'money minus' : 'money plus'}>
                {transaction.amount > 0 ? `+$${transaction.amount}` : `-$${Math.abs(transaction.amount)}`}
              </span>
              <button className="view-btn" onClick={() => toggleImage(id)}>
                📷
              </button>

              {visibleImages[id]?.show && (
                <div
                  className={`image-preview ${visibleImages[id]?.small ? 'small' : ''}`}
                  onClick={() => toggleSize(id)}
                >
                  <img src={transaction.image || defaultImage} alt="Transaction" />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
