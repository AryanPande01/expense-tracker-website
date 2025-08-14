


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import { Header } from './components/Header';
// import { Balance } from './components/Balance';
// import { IncomeExpenses } from './components/IncomeExpenses';
// import { TransactionList } from './components/TransactionList';
// import { AddTransaction } from './components/AddTransaction';
// import { LogBook } from './components/LogBook';
// import { GlobalProvider } from './context/GlobalState';

// import './App.css';

// function HomePage() {
//   return (
//     <>
//       {/* Background video */}
//       <video autoPlay muted loop id="bg-video">
//         <source src="istockphoto-2198319706-640_adpp_is.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Main content */}
//       <Header />
//       <div className="container">
//         <Balance />
//         <IncomeExpenses />
//         <TransactionList />
//         <AddTransaction />

//         {/* See Log Book Button */}
//         <Link to="/logbook">
//           <button className="logbook-btn" id="logbook-button">See Log Book</button>
//         </Link>
//       </div>
//     </>
//   );
// }

// function App() {
//   return (
//     <GlobalProvider>
//       <Router>
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/logbook" component={LogBook} />
//         </Switch>
//       </Router>
//     </GlobalProvider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { LogBook } from './components/LogBook';
import { DetailedHistory } from './components/DetailedHistory';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function HomePage() {
  return (
    <>
      {/* Background video */}
      <video autoPlay muted loop id="bg-video">
        <source src="istockphoto-2198319706-640_adpp_is.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main content */}
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />

        {/* See Log Book Button */}
        <Link to="/logbook">
          <button className="logbook-btn" id="logbook-button">See Log Book</button>
        </Link>
      </div>
    </>
  );
}

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/logbook" component={LogBook} />
          <Route path="/detailed-history" component={DetailedHistory} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
