import { useState, useEffect } from 'react';
import { getNotices } from '../api';
import { FaBullhorn, FaExclamationTriangle } from 'react-icons/fa';

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      setLoading(true);
      const response = await getNotices();
      const noticesData = response.data || [];
      setNotices(Array.isArray(noticesData) ? noticesData : []);
      setError(null);
    } catch (error) {
      console.error('Failed to fetch notices:', error);
      setError('Failed to load notices. Please try again later.');
      setNotices([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading notices...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FaExclamationTriangle className="text-red-600 text-5xl mb-4" />
          <p className="text-gray-800 mb-4">{error}</p>
          <button 
            onClick={fetchNotices}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-center mb-4">School Notices</h1>
        <p className="text-center text-gray-600 mb-12">Stay updated with latest announcements</p>
        
        {notices && notices.length === 0 ? (
          <div className="text-center py-12">
            <FaBullhorn className="text-gray-400 text-5xl mb-4" />
            <p className="text-gray-500 text-lg">No notices available at the moment.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {notices.map((notice) => (
              notice && (
                <div
                  key={notice._id}
                  className={`bg-white rounded-lg shadow-md p-6 transition transform hover:scale-105 duration-300 ${
                    notice.isImportant ? 'border-l-4 border-red-500' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-semibold text-gray-800">{notice.title || 'Untitled'}</h2>
                    {notice.isImportant && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold">
                        Important
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{notice.content || 'No content available'}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">
                      Posted on: {new Date(notice.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    {notice.date && (
                      <span className="text-gray-400">
                        Effective: {new Date(notice.date).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notice;