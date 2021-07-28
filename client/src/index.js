import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter } from 'react-router-dom';
import './bootstrap.min.css';
import ScrollToTop from './scrollTop'
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
			<ScrollToTop>
				<App />
				
				</ScrollToTop>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
