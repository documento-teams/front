import Sidebar from '@/components/common/sidebar';

const FooterSidebar = () => {
  return (
      <button className='btn btn-error w-full text-gray-100 hover:bg-gray-700 text-left'>
        Logout
      </button>
  );
}

const Dashboard = () => { 
  const items = [
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Users',
      href: '/users',
    }, 
    {
      label: 'Documents',
      href: '/documents',
    },
  ];
  return (
    <div className='flex'>
      <Sidebar items={items} footer={<FooterSidebar />} />
    </div>
  );

};

export default Dashboard;