import React from 'react';
import ReactDOM from 'react-dom/client';
import { Cookies, CookiesProvider } from 'react-cookie';
import { 
	BrowserRouter, 
	Navigate, 
	Outlet, 
	Routes, 
	Route
} from 'react-router-dom';

import App from './pages/App/index';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import RecoveryPage from './pages/Recovery/RecoveryPage';

import './index.css';

const cookies = new Cookies();

const ProtectedRoute = () => {
	const email = cookies.get('email');
	const password = cookies.get('password');

	return (email === undefined || password === undefined) ? 
		<Navigate to='/login' replace /> :
		<Outlet />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<CookiesProvider>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/app' />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/recovery' element={<RecoveryPage />} />
				<Route element={<ProtectedRoute />}>
					<Route path='/app' element={<App />} />
				</Route>
				<Route path="*" element={<><h1>There's nothing here: 404!</h1></>} />
			</Routes>
		</BrowserRouter>
	</CookiesProvider>
);
