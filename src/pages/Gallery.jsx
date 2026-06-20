import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaTimes, FaSearchPlus, FaSchool, FaArrowLeft, FaImages } from 'react-icons/fa';
import { getGallery } from '../api';
import './Gallery.css';

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]); // keep an untouched master copy for filtering
  const [activeCategory, setActiveCategory] = useState('All');
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
      const safeData = Array.isArray(galleryData) ? galleryData : [];
      setItems(safeData);
      setAllItems(safeData);
      setActiveCategory('All');
      setError(null);
    } catch (error) {
      console.error('Failed to fetch gallery:', error);
      setError('Failed to load gallery images. Please try again later.');
      setItems([]);
      setAllItems([]);
    } finally {
      setLoading(false);
    }
  };

  // Safely get categories from the master list (not the filtered one)
  const categories = allItems && Array.isArray(allItems)
    ? [...new Set(allItems.filter(item => item?.category).map(item => item.category))]
    : [];

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setItems(allItems);
    } else {
      setItems(allItems.filter(item => item.category === category));
    }
  };

  // Keyboard support for the lightbox (Esc to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (loading) {
    return (
      <div className="gallery-page">
        <div className="gallery-page-hero">
          <div className="gallery-page-container">
            <span className="gallery-eyebrow"><FaImages /> Moments at प्रेरणा</span>
            <h1>Campus Gallery</h1>
            <p>A look inside the classrooms, events, and everyday moments that shape our students.</p>
          </div>
        </div>
        <div className="gallery-page-container">
          <div className="gallery-grid-page">
            {Array.from({ length: 8 }).map((_, i) => (
              <div className="gallery-card skeleton-card" key={i}></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gallery-page">
        <div className="gallery-state-screen">
          <div className="gallery-state-icon error">
            <FaCamera />
          </div>
          <h2>Something went wrong</h2>
          <p>{error}</p>
          <button onClick={fetchGallery} className="gallery-btn primary">
            Try Again
          </button>
          <Link to="/" className="gallery-btn-link"><FaArrowLeft /> Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-page">
      {/* Page Hero */}
      <div className="gallery-page-hero">
        <div className="gallery-page-container">
          <span className="gallery-eyebrow"><FaImages /> Moments at प्रेरणा</span>
          <h1>Campus Gallery</h1>
          <p>A look inside the classrooms, events, celebrations, and everyday moments that shape our students at प्रेरणा शिक्षण संस्था.</p>
        </div>
      </div>

      <div className="gallery-page-container">
        {/* Category Filters */}
        {categories.length > 0 && (
          <div className="gallery-filters">
            <button
              onClick={() => handleFilter('All')}
              className={`filter-chip ${activeCategory === 'All' ? 'active' : ''}`}
            >
              All Photos
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className={`filter-chip ${activeCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Empty State */}
        {items && items.length === 0 ? (
          <div className="gallery-state-screen inline">
            <div className="gallery-state-icon">
              <FaSchool />
            </div>
            <h2>No photos here yet</h2>
            <p>
              {activeCategory === 'All'
                ? 'Gallery images will appear here once they are added.'
                : `No photos found in "${activeCategory}". Try another category.`}
            </p>
            {activeCategory !== 'All' && (
              <button onClick={() => handleFilter('All')} className="gallery-btn primary">
                View All Photos
              </button>
            )}
          </div>
        ) : (
          <div className="gallery-grid-page">
            {items.map((item, idx) => (
              item && (
                <div
                  key={item._id}
                  className="gallery-card"
                  style={{ animationDelay: `${(idx % 8) * 0.06}s` }}
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title || 'Gallery image'}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=प्रेरणा+School';
                    }}
                  />
                  <div className="gallery-card-overlay">
                    <span className="zoom-icon"><FaSearchPlus /></span>
                    <div className="gallery-card-info">
                      <h3>{item.title || 'Untitled'}</h3>
                      {item.category && <span className="card-category">{item.category}</span>}
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
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <FaTimes />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title || 'Gallery image'}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400?text=प्रेरणा+School';
              }}
            />
            <div className="lightbox-info">
              <h3>{selectedImage.title || 'Untitled'}</h3>
              <p>{selectedImage.description || 'No description available'}</p>
              {selectedImage.category && (
                <span className="card-category">{selectedImage.category}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;