import { Outlet } from 'react-router-dom';

import DashboardContainer from '../../components/DashboardContainer';

const Dashboard = () => {
	return (
		<div>
			<Outlet />
			<DashboardContainer />
		</div>
	);
};

export default Dashboard;
