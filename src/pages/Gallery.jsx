import { useState, useEffect } from 'react';
import { getGallery } from '../api';

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const response = await getGallery();
      // Ensure we're setting an array
      const galleryData = response.data || [];
      setItems(Array.isArray(galleryData) ? galleryData : []);
      setError(null);
    } catch (error) {
      console.error('Failed to fetch gallery:', error);
      setError('Failed to load gallery images. Please try again later.');
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <p className="text-gray-800 mb-4">{error}</p>
          <button 
            onClick={fetchGallery}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Safely get categories from items array
  const categories = items && Array.isArray(items) 
    ? [...new Set(items.filter(item => item?.category).map(item => item.category))]
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-center mb-4">Our Gallery</h1>
        <p className="text-center text-gray-600 mb-12">Explore memorable moments from our school</p>
        
        {categories.length > 0 && (
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <button 
              onClick={() => setItems([...items])}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              All
            </button>
            {categories.map(category => (
              <button 
                key={category} 
                onClick={() => {
                  const filtered = items.filter(item => item.category === category);
                  setItems(filtered);
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
              >
                {category}
              </button>
            ))}
          </div>
        )}
        
        {items && items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No gallery images available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              item && (
                <div
                  key={item._id}
                  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title || 'Gallery image'}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-semibold mb-2">{item.title || 'Untitled'}</h3>
                      <p className="text-sm">{item.description || 'No description available'}</p>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title || 'Gallery image'} 
              className="max-w-full max-h-screen object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold">{selectedImage.title || 'Untitled'}</h3>
              <p className="text-sm mt-1">{selectedImage.description || 'No description available'}</p>
              {selectedImage.category && (
                <p className="text-xs mt-1 text-gray-300">Category: {selectedImage.category}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;