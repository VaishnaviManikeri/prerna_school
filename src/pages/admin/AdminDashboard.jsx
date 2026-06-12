import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const modules = [
    { title: 'Gallery Management', path: '/admin/gallery', icon: '🖼️', color: 'bg-blue-500' },
    { title: 'Notice Management', path: '/admin/notices', icon: '📢', color: 'bg-green-500' },
    { title: 'Career Management', path: '/admin/careers', icon: '💼', color: 'bg-purple-500' },
    { title: 'Blog Management', path: '/admin/blogs', icon: '📝', color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module) => (
            <Link
              key={module.title}
              to={module.path}
              className={`${module.color} rounded-lg shadow-lg p-6 text-white hover:opacity-90 transition`}
            >
              <div className="text-4xl mb-3">{module.icon}</div>
              <h3 className="text-xl font-semibold">{module.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;