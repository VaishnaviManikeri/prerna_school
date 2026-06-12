import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getCareers, createCareer, updateCareer, deleteCareer } from '../../api';

const CareerAdmin = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [editingCareer, setEditingCareer] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    description: '',
    requirements: '',
    salary: '',
    isActive: true,
  });

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      setFetching(true);
      const response = await getCareers();
      // Ensure we're setting an array
      const careersData = response.data || [];
      setCareers(Array.isArray(careersData) ? careersData : []);
    } catch (error) {
      console.error('Failed to fetch careers:', error);
      let errorMessage = 'Failed to fetch careers';
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        } else if (typeof error.response.data === 'string') {
          errorMessage = error.response.data;
        }
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = 'No response from server. Please check if backend is running.';
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage = error.message;
      }
      toast.error(errorMessage);
      setCareers([]);
    } finally {
      setFetching(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Prepare the data - send as FormData or JSON based on what backend expects
      // The backend controller expects JSON, so we'll send as JSON
      const careerData = {
        title: formData.title,
        department: formData.department || '',
        location: formData.location || '',
        type: formData.type,
        description: formData.description || '',
        requirements: formData.requirements ? formData.requirements.split('\n').filter(req => req.trim()) : [],
        salary: formData.salary || '',
        isActive: formData.isActive,
      };
      
      let response;
      if (editingCareer) {
        response = await updateCareer(editingCareer._id, careerData);
        if (response.data) {
          toast.success('Career updated successfully');
        }
      } else {
        response = await createCareer(careerData);
        if (response.data) {
          toast.success('Career created successfully');
        }
      }
      resetForm();
      await fetchCareers();
    } catch (error) {
      console.error('Operation failed:', error);
      let errorMessage = 'Operation failed';
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        } else if (typeof error.response.data === 'string') {
          errorMessage = error.response.data;
        }
      } else if (error.request) {
        errorMessage = 'No response from server. Please check your connection.';
      } else {
        errorMessage = error.message;
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this career posting?')) {
      try {
        await deleteCareer(id);
        toast.success('Career deleted successfully');
        await fetchCareers();
      } catch (error) {
        console.error('Failed to delete career:', error);
        let errorMessage = 'Failed to delete career';
        if (error.response && error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }
        toast.error(errorMessage);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      department: '',
      location: '',
      type: 'Full-time',
      description: '',
      requirements: '',
      salary: '',
      isActive: true,
    });
    setEditingCareer(null);
  };

  const startEdit = (career) => {
    setEditingCareer(career);
    setFormData({
      title: career.title || '',
      department: career.department || '',
      location: career.location || '',
      type: career.type || 'Full-time',
      description: career.description || '',
      requirements: career.requirements ? career.requirements.join('\n') : '',
      salary: career.salary || '',
      isActive: career.isActive !== undefined ? career.isActive : true,
    });
  };

  if (fetching) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading careers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold mb-8">Career Management</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">{editingCareer ? 'Edit Career' : 'Add New Career'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Department</label>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Education, Administration"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Pune, Maharashtra"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Employment Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Salary Range</label>
                <input
                  type="text"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., ₹30,000 - ₹45,000 per month"
                />
              </div>
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="mr-2 w-4 h-4"
                  />
                  <span className="text-gray-700">Active (Visible to applicants)</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
                placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Requirements (one per line)</label>
              <textarea
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Bachelor's degree in relevant field&#10;3+ years of experience&#10;Excellent communication skills&#10;..."
              />
              <p className="text-xs text-gray-500 mt-1">Press Enter after each requirement</p>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : (editingCareer ? 'Update Career' : 'Create Career')}
              </button>
              {editingCareer && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {careers.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                      No careers found. Create your first career posting above.
                    </td>
                  </tr>
                ) : (
                  careers.map((career) => (
                    <tr key={career._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{career.title}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{career.department || '—'}</td>
                      <td className="px-6 py-4 text-gray-600">{career.location || '—'}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          career.type === 'Full-time' ? 'bg-green-100 text-green-800' :
                          career.type === 'Part-time' ? 'bg-blue-100 text-blue-800' :
                          career.type === 'Contract' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {career.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          career.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {career.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => startEdit(career)}
                          className="text-blue-600 hover:text-blue-900 mr-3 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(career._id)}
                          className="text-red-600 hover:text-red-900 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAdmin;