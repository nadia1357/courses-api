import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ userRole, children }) => {
	if (userRole === 'ADMIN') {
		return <Navigate to='/courses' replace />;
	}
	return children;
};
