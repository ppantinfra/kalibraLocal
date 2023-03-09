import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/fonts/Poppins-Regular.ttf';
import './assets/fonts/Poppins-SemiBold.ttf';
import './assets/fonts/Poppins-Medium.ttf';

import reportWebVitals from './reportWebVitals';
// const App = React.lazy(() => import("./App"));

const rootNode = document.getElementById('root') as HTMLElement;
if (rootNode && rootNode.innerHTML !== '') {
  ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement, <App />);
} else {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(<App />);
}

// if (process.env.REACT_APP_SSR === "true") {
//   const root = ReactDOM.hydrateRoot(
//     document.getElementById("root") as HTMLElement,
//       <App />
//   );
// } else {
//   const root = ReactDOM.createRoot(
//     document.getElementById("root") as HTMLElement
//   );
//   root.render(<App />);
// }

reportWebVitals();
