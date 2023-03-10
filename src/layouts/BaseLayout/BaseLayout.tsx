import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/layouts/BaseLayout/components';

const BaseLayout = () => (
  <div className="w-full h-screen flex flex-row">
    <Sidebar />
    <div className="flex-1 overflow-x-scroll">
      <Outlet />
    </div>
  </div>
);

export default BaseLayout;
