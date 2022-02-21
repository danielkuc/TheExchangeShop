import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import { Admin, Profile } from './components';
import ProtectedRoute from './auth/protected-route';

ReactDOM.render(
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/admin' element={
              <ProtectedRoute redirectTo="/">
                <Admin/>
              </ProtectedRoute>
            } />
            <Route path='/profile' element={
              <ProtectedRoute redirectTo="/">
                <Profile/>
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </Auth0ProviderWithHistory>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
