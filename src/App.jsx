import { Route, Routes } from 'react-router-dom';

import Dashboard from './routes/Dashboard';
import Navigation from './routes/Navigation';
import Authentication from './routes/Authentication';
import Shop from './routes/Shop';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				{/* index: a child route with no path that renders parent's outlet */}
				<Route index element={<Dashboard />} />
				<Route path='shop' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
