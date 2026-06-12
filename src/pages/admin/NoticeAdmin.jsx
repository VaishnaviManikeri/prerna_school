import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getNotices, createNotice, updateNotice, deleteNotice } from '../../api';

const NoticeAdmin = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    isImportant: false,
  });

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await getNotices();
      setNotices(response.data);
    } catch (error) {
      toast.error('Failed to fetch notices');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (editingNotice) {
        await updateNotice(editingNotice._id, formData);
        toast.success('Notice updated successfully');
      } else {
        await createNotice(formData);
        toast.success('Notice created successfully');
      }
      resetForm();
      fetchNotices();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      try {
        await deleteNotice(id);
        toast.success('Notice deleted successfully');
        fetchNotices();
      } catch (error) {
        toast.error('Failed to delete notice');
      }
    }
  };

  const resetForm = () => {
    setFormData({ title: '', content: '', isImportant: false });
    setEditingNotice(null);
  };

  const startEdit = (notice) => {
    setEditingNotice(notice);
    setFormData({
      title: notice.title,
      content: notice.content,
      isImportant: notice.isImportant,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold mb-8">Notice Management</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">{editingNotice ? 'Edit Notice' : 'Add New Notice'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Content</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
                rows="5"
                required
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isImportant}
                  onChange={(e) => setFormData({ ...formData, isImportant: e.target.checked })}
                  className="mr-2"
                />
                <span className="text-gray-700">Mark as Important</span>
              </label>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                {loading ? 'Processing...' : (editingNotice ? 'Update' : 'Create')}
              </button>
              {editingNotice && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Content</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Important</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {notices.map((notice) => (
                <tr key={notice._id}>
                  <td className="px-6 py-4">{notice.title}</td>
                  <td className="px-6 py-4 max-w-md truncate">{notice.content}</td>
                  <td className="px-6 py-4">
                    {notice.isImportant && <span className="text-red-600 font-semibold">Yes</span>}
                  </td>
                  <td className="px-6 py-4">{new Date(notice.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => startEdit(notice)}
                      className="text-blue-600 hover:text-blue-800 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(notice._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NoticeAdmin;