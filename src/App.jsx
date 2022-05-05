import { Route, Routes } from 'react-router-dom';

import Dashboard from './routes/Dashboard';
import Navigation from './routes/Navigation';

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
			</Route>
		</Routes>
	);
};

export default App;
