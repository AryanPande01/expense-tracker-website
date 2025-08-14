
// // components/LogBook.js
// import React, { useContext } from 'react';
// import { GlobalContext } from '../context/GlobalState';
// import { Link } from 'react-router-dom';
// import './LogBook.css';

// export const LogBook = () => {
//   const { transactions } = useContext(GlobalContext);

//   // Group by date and calculate total per day
//   const dailyTotals = transactions.reduce((acc, tx) => {
//     const date = new Date(tx.date || tx.id).toLocaleDateString();
//     acc[date] = (acc[date] || 0) + tx.amount;
//     return acc;
//   }, {});

//   return (
//     <>
//       {/* Background video */}
//       <video autoPlay muted loop id="logbook-video">
//         <source src="bg.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="logbook-container">
//         <h2>Daily Grand Totals</h2>
//         <ul className="logbook-list">
//           {Object.entries(dailyTotals).map(([date, total]) => (
//             <li key={date}>
//               <strong>{date}:</strong> ${total.toFixed(2)}
//             </li>
//           ))}
//         </ul>
//         <Link to="/">
//           <button className="back-btn">Back to Tracker</button>
//         </Link>
//       </div>
//     </>
//   );
// };


// components/LogBook.js
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import './LogBook.css';

export const LogBook = () => {
  const { transactions } = useContext(GlobalContext);

  // Group by date and calculate total per day
  const dailyTotals = transactions.reduce((acc, tx) => {
    const date = new Date(tx.date || tx._id || tx.id).toLocaleDateString();
    acc[date] = (acc[date] || 0) + tx.amount;
    return acc;
  }, {});

  return (
    <>
      {/* Background video */}
      <video autoPlay muted loop id="logbook-video">
        <source src="bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="logbook-container">
        <h2>Daily Grand Totals</h2>
        <ul className="logbook-list">
          {Object.entries(dailyTotals).map(([date, total]) => (
            <li key={date}>
              <strong>{date}:</strong> ${total.toFixed(2)}
            </li>
          ))}
        </ul>

        {/* View Detailed History Button */}
        <Link to="/detailed-history">
          <button className="back-btn">View Detailed History</button>
        </Link>

        <Link to="/">
          <button className="back-btn">Back to Tracker</button>
        </Link>
      </div>
    </>
  );
};
