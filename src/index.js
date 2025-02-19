import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/startPage/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


let reset = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store} >
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

reset(store.getState());

store.subscribe(() => {
    let state = store.getState();
    reset(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
