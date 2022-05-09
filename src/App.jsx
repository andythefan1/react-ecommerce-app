import { Route, Routes } from 'react-router-dom';

import Dashboard from './routes/Dashboard';
import Navigation from './routes/Navigation';
import SignIn from './routes/Sign-in';

const Shop = () => {
	return <h1>I'm the placeholder for the shop page!</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				{/* index: a child route with no path that renders parent's outlet */}
				<Route index element={<Dashboard />} />
				<Route path='shop' element={<Shop />} />
				<Route path='sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
