import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getGallery, createGalleryItem, updateGalleryItem, deleteGalleryItem } from '../../api';

const GalleryAdmin = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: null,
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getGallery();
      setItems(response.data);
    } catch (error) {
      toast.error('Failed to fetch gallery items');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('category', formData.category);
    if (formData.image) data.append('image', formData.image);
    
    try {
      if (editingItem) {
        await updateGalleryItem(editingItem._id, data);
        toast.success('Gallery item updated successfully');
      } else {
        await createGalleryItem(data);
        toast.success('Gallery item created successfully');
      }
      resetForm();
      fetchItems();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await deleteGalleryItem(id);
        toast.success('Item deleted successfully');
        fetchItems();
      } catch (error) {
        toast.error('Failed to delete item');
      }
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', category: '', image: null });
    setEditingItem(null);
  };

  const startEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      category: item.category,
      image: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold mb-8">Gallery Management</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">{editingItem ? 'Edit Gallery Item' : 'Add New Gallery Item'}</h2>
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
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
                rows="3"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Image</label>
              <input
                type="file"
                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                className="w-full px-3 py-2 border rounded-md"
                accept="image/*"
                required={!editingItem}
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                {loading ? 'Processing...' : (editingItem ? 'Update' : 'Create')}
              </button>
              {editingItem && (
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.map((item) => (
                <tr key={item._id}>
                  <td className="px-6 py-4">
                    <img src={item.imageUrl} alt={item.title} className="h-12 w-12 object-cover rounded" />
                  </td>
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4">{item.category || 'N/A'}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => startEdit(item)}
                      className="text-blue-600 hover:text-blue-800 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
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

export default GalleryAdmin;