import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getBlogs, createBlog, updateBlog, deleteBlog } from '../../api';

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    metaTitle: '',
    metaDescription: '',
    tags: '',
    featuredImage: null,
    published: true,
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await getBlogs();
      setBlogs(response.data);
    } catch (error) {
      toast.error('Failed to fetch blogs');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    data.append('excerpt', formData.excerpt);
    data.append('author', formData.author);
    data.append('metaTitle', formData.metaTitle);
    data.append('metaDescription', formData.metaDescription);
    data.append('tags', JSON.stringify(formData.tags.split(',').map(tag => tag.trim())));
    data.append('published', formData.published);
    if (formData.featuredImage) data.append('featuredImage', formData.featuredImage);
    
    try {
      if (editingBlog) {
        await updateBlog(editingBlog._id, data);
        toast.success('Blog updated successfully');
      } else {
        await createBlog(data);
        toast.success('Blog created successfully');
      }
      resetForm();
      fetchBlogs();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await deleteBlog(id);
        toast.success('Blog deleted successfully');
        fetchBlogs();
      } catch (error) {
        toast.error('Failed to delete blog');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      author: '',
      metaTitle: '',
      metaDescription: '',
      tags: '',
      featuredImage: null,
      published: true,
    });
    setEditingBlog(null);
  };

  const startEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt || '',
      author: blog.author || '',
      metaTitle: blog.metaTitle || '',
      metaDescription: blog.metaDescription || '',
      tags: blog.tags ? blog.tags.join(', ') : '',
      featuredImage: null,
      published: blog.published,
    });
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'blockquote', 'code-block',
    'align',
    'link', 'image'
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold mb-8">Blog Management</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">{editingBlog ? 'Edit Blog' : 'Create New Blog'}</h2>
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
              <label className="block text-gray-700 mb-2">Excerpt (Short Description)</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
                rows="3"
                placeholder="A brief summary of the blog post..."
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Content</label>
              <ReactQuill
                theme="snow"
                value={formData.content}
                onChange={(value) => setFormData({ ...formData, content: value })}
                modules={modules}
                formats={formats}
                className="h-96 mb-12"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Tags (comma separated)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="education, school, learning"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Meta Title (SEO)</label>
                <input
                  type="text"
                  value={formData.metaTitle}
                  onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Meta Description (SEO)</label>
                <input
                  type="text"
                  value={formData.metaDescription}
                  onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Featured Image</label>
                <input
                  type="file"
                  onChange={(e) => setFormData({ ...formData, featuredImage: e.target.files[0] })}
                  className="w-full px-3 py-2 border rounded-md"
                  accept="image/*"
                />
              </div>
              <div>
                <label className="flex items-center mt-8">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Publish immediately</span>
                </label>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                {loading ? 'Processing...' : (editingBlog ? 'Update' : 'Create')}
              </button>
              {editingBlog && (
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Views</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium">{blog.title}</div>
                      <div className="text-sm text-gray-500">{blog.slug}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{blog.author}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs ${blog.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {blog.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4">{blog.views}</td>
                  <td className="px-6 py-4">{new Date(blog.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => startEdit(blog)}
                      className="text-blue-600 hover:text-blue-800 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
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

export default BlogAdmin;