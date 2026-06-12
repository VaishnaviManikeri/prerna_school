import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBlogBySlug } from '../api';
import toast from 'react-hot-toast';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getBlogBySlug(slug);
      if (response.data) {
        setBlog(response.data);
        // Fetch related posts based on tags
        if (response.data.tags && response.data.tags.length > 0) {
          await fetchRelatedPosts(response.data.tags, response.data._id);
        }
      } else {
        setError('Blog post not found');
      }
    } catch (error) {
      console.error('Failed to fetch blog:', error);
      if (error.response && error.response.status === 404) {
        setError('Blog post not found');
      } else {
        setError('Failed to load blog post. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedPosts = async (tags, currentBlogId) => {
    try {
      const { getBlogs } = await import('../api');
      const response = await getBlogs();
      const allBlogs = response.data || [];
      const related = allBlogs
        .filter(blog => 
          blog.published === true && 
          blog._id !== currentBlogId &&
          blog.tags && 
          blog.tags.some(tag => tags.includes(tag))
        )
        .slice(0, 3);
      setRelatedPosts(related);
    } catch (error) {
      console.error('Failed to fetch related posts:', error);
    }
  };

  const handleShare = async (platform) => {
    const url = window.location.href;
    const text = blog?.title || 'Check out this blog post';
    
    switch(platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      default:
        try {
          await navigator.clipboard.writeText(url);
          toast.success('Link copied to clipboard!');
        } catch (err) {
          toast.error('Failed to copy link');
        }
    }
  };

  // Function to create HTML content with styling
  const createMarkup = () => {
    if (!blog || !blog.content) return { __html: '' };
    return { __html: blog.content };
  };

  // Function to strip HTML tags for meta description
  const stripHtml = (html) => {
    if (!html) return '';
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The blog post you\'re looking for doesn\'t exist or has been removed.'}</p>
          <Link to="/blog" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article className="min-h-screen bg-white">
        {/* Hero Section with Featured Image */}
        <div className="relative bg-gray-900">
          {blog.featuredImage ? (
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              <img
                src={blog.featuredImage}
                alt={blog.title}
                className="w-full h-full object-cover opacity-70"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/1200x500?text=Featured+Image';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ) : (
            <div className="h-64 md:h-96 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
          )}
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-4xl">
              <div className="mb-4">
                {blog.tags && blog.tags.map((tag, index) => (
                  <span key={index} className="inline-block bg-blue-500 bg-opacity-80 text-white text-sm px-3 py-1 rounded-full mx-1">
                    #{tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Author Info and Share Buttons */}
          <div className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b border-gray-200 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {blog.author ? blog.author.charAt(0).toUpperCase() : 'A'}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{blog.author || 'School Admin'}</div>
                <div className="text-sm text-gray-500">
                  {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })} · {blog.readingTime || '5 min read'}
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                aria-label="Share on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition"
                aria-label="Share on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.68-1.42 2.3-2.34z"/>
                </svg>
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                </svg>
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                aria-label="Share on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.563 1.098 3.677l-1.267 3.799 3.917-1.209c1.073.585 2.304.894 3.56.895h.003c3.181 0 5.768-2.586 5.768-5.766-.001-3.18-2.587-5.766-5.768-5.766zm3.588 7.825c-.18.507-.935.928-1.537 1.051-.424.086-.896.153-1.347.153-.515 0-.999-.124-1.478-.352-.834-.396-1.565-.973-2.184-1.706-.858-.995-1.367-2.153-1.447-3.316-.042-.613.145-1.207.482-1.719.278-.423.734-.682 1.142-.682.144 0 .281.037.401.109.188.113.318.289.368.493.084.342.245.873.341 1.167.092.282.14.514-.083.927-.223.413-.395.612-.634.88-.179.202-.312.356-.439.503-.14.164-.071.349.037.496.177.244.433.534.735.801.628.555 1.42.97 2.288 1.212.281.078.552.115.811.115.265 0 .521-.055.763-.163.189-.084.337-.211.46-.362.167-.202.204-.422.085-.694-.119-.272-.399-.495-.603-.614-.174-.102-.347-.13-.468-.18-.165-.069-.345.018-.453.125-.175.174-.359.377-.454.495-.091.116-.184.145-.3.105-.298-.102-.66-.295-.99-.587-.382-.338-.669-.734-.822-1.101-.108-.258-.027-.431.13-.597.106-.112.209-.241.291-.38.077-.13.083-.286.015-.419-.086-.168-.192-.359-.292-.536-.159-.283-.299-.509-.297-.657.003-.14.069-.259.173-.355.12-.111.258-.166.391-.166h.106c.145.004.275.079.349.197.092.147.228.388.309.568.113.253.185.522.23.791.095.57-.064 1.099-.414 1.465-.237.249-.529.407-.819.411-.26.004-.498-.097-.677-.293-.079-.087-.142-.188-.185-.299-.082-.213-.118-.437-.103-.659.012-.165.045-.323.093-.464.061-.178.135-.347.214-.501.081-.156.122-.288.098-.388-.057-.236-.246-.435-.45-.601-.315-.256-.678-.397-1.022-.401-.226-.002-.441.06-.636.166-.107.058-.202.135-.282.231-.455.544-.723 1.242-.739 1.951-.01.378.07.752.22 1.085.099.22.223.427.369.619.129.171.275.329.431.475.268.25.565.462.871.632.194.108.397.199.607.273.125.044.254.08.386.107.135.027.274.04.411.038.259-.004.511-.057.742-.153.233-.096.443-.234.619-.408.245-.243.429-.527.543-.836.101-.274.12-.562.052-.838-.064-.26-.203-.493-.407-.673-.135-.12-.279-.204-.427-.249-.067-.02-.133-.029-.196-.026h-.101c-.022.001-.043.005-.063.013-.036.015-.07.035-.101.059-.183.144-.342.318-.46.51-.082.131-.108.217-.083.295.035.113.115.214.215.277.088.056.179.084.257.125.086.045.157.115.202.202.042.081.052.167.028.242-.022.067-.066.122-.12.161z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Blog Content with Medium-style formatting */}
          <div
            className="blog-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={createMarkup()}
          />

          {/* Tags Section */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/blog?tag=${tag}`}
                    className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio Section */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {blog.author ? blog.author.charAt(0).toUpperCase() : 'A'}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{blog.author || 'School Admin'}</h3>
                <p className="text-gray-600 text-sm">
                  Passionate educator and writer dedicated to sharing insights about education, 
                  learning, and student development at Prerana Shikshan Sanstha.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-serif font-bold mb-6">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <Link
                    key={post._id}
                    to={`/blog/${post.slug}`}
                    className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    {post.featuredImage && (
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x200?text=Post';
                        }}
                      />
                    )}
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-500 text-xs">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Interested in Learning More?</h3>
            <p className="text-gray-600 mb-6">Schedule a school visit or contact our admissions office</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/admissions"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-semibold"
              >
                Book a School Visit
              </Link>
              <Link
                to="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition font-semibold"
              >
                Enquire Now
              </Link>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <Link
              to="/blog"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
            >
              ← Back to Blog
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-600 hover:text-gray-800 inline-flex items-center gap-2"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </article>

      {/* Add custom styles for blog content */}
      <style>{`
        .blog-content {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
          font-size: 1.125rem;
          line-height: 1.8;
          color: #222;
        }
        
        .blog-content p:first-of-type::first-letter {
          font-size: 4em;
          font-weight: bold;
          float: left;
          line-height: 0.8;
          margin-right: 12px;
          font-family: 'Georgia', serif;
        }
        
        .blog-content h1 {
          font-size: 2.5rem;
          font-family: 'Georgia', 'Playfair Display', serif;
          font-weight: bold;
          margin: 2rem 0 1rem;
        }
        
        .blog-content h2 {
          font-size: 1.75rem;
          font-family: 'Georgia', 'Playfair Display', serif;
          font-weight: bold;
          margin: 1.75rem 0 1rem;
        }
        
        .blog-content h3 {
          font-size: 1.5rem;
          font-family: 'Georgia', 'Playfair Display', serif;
          font-weight: bold;
          margin: 1.5rem 0 0.75rem;
        }
        
        .blog-content blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1.5rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #4a5568;
          background: #f8fafc;
          padding: 1rem 1.5rem;
          border-radius: 8px;
        }
        
        .blog-content ul, .blog-content ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        
        .blog-content li {
          margin: 0.5rem 0;
        }
        
        .blog-content img {
          border-radius: 12px;
          margin: 1.5rem 0;
          max-width: 100%;
          height: auto;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .blog-content strong {
          font-weight: 600;
          color: #000;
        }
        
        .blog-content a {
          color: #3b82f6;
          text-decoration: underline;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 768px) {
          .blog-content {
            font-size: 1rem;
          }
          
          .blog-content h1 {
            font-size: 2rem;
          }
          
          .blog-content h2 {
            font-size: 1.5rem;
          }
          
          .blog-content p:first-of-type::first-letter {
            font-size: 3em;
          }
        }
      `}</style>
    </>
  );
};

export default BlogPost;