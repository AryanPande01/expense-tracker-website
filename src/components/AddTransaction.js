
// // src/components/AddTransaction.js
// import React, { useState, useContext } from 'react';
// import { GlobalContext } from '../context/GlobalState';

// export const AddTransaction = () => {
//   const [text, setText] = useState('');
//   const [amount, setAmount] = useState(0);

//   const { addTransaction } = useContext(GlobalContext);

//   const onSubmit = e => {
//     e.preventDefault();

//     const newTransaction = {
//       id: Date.now(), // unique ID based on timestamp
//       text,
//       amount: +amount,
//       date: new Date().toISOString() // timestamp to group by day
//     };

//     addTransaction(newTransaction);

//     // Optional: reset form
//     setText('');
//     setAmount(0);
//   };

//   return (
//     <>
//       <h3>Add new transaction</h3>
//       <form onSubmit={onSubmit}>
//         <div className="form-control">
//           <label htmlFor="text">Text</label>
//           <input
//             type="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Enter text..."
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label htmlFor="amount">
//             Amount <br />
//             (negative - expense, positive - income)
//           </label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             placeholder="Enter amount..."
//             required
//           />
//         </div>
//         <button className="btn">Add transaction</button>
//       </form>
//     </>
//   );
// };


// components/AddTransaction.js
import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [image, setImage] = useState(null); // New

  const { addTransaction, loading, error } = useContext(GlobalContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result); // base64 string
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
      image, // Optional base64 image
    };

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
    setImage(null);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label>Amount<br />(negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className="form-control">
          <label>Upload Photo</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
