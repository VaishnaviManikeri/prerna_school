import { useState, useEffect } from 'react';
import { getCareers } from '../api';
import toast from 'react-hot-toast';

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      setLoading(true);
      const response = await getCareers();
      const careersData = response.data || [];
      // Filter only active careers
      const activeCareers = Array.isArray(careersData) 
        ? careersData.filter(career => career && career.isActive)
        : [];
      setCareers(activeCareers);
      setError(null);
    } catch (error) {
      console.error('Failed to fetch careers:', error);
      setError('Failed to load career opportunities. Please try again later.');
      setCareers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = (career) => {
    setSelectedCareer(career);
    toast.success(`Application form for ${career.title} will open soon!`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading career opportunities...</p>
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
            onClick={fetchCareers}
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
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-center mb-4">Careers at Our School</h1>
        <p className="text-center text-gray-600 mb-12">Join our team of dedicated educators and staff</p>
        
        {careers && careers.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-5xl mb-4">💼</div>
            <p className="text-gray-500 text-lg">No open positions at the moment. Please check back later.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {careers.map((career) => (
              career && (
                <div key={career._id} className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-102 duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                      <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{career.title || 'Position Title'}</h2>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          {career.location && <span>📍 {career.location}</span>}
                          {career.type && <span>💼 {career.type}</span>}
                          {career.department && <span>🏢 {career.department}</span>}
                        </div>
                      </div>
                      {career.salary && (
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {career.salary}
                        </div>
                      )}
                    </div>
                    
                    {career.description && (
                      <p className="text-gray-600 mb-4 leading-relaxed">{career.description}</p>
                    )}
                    
                    {career.requirements && career.requirements.length > 0 && (
                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-800 mb-2">Requirements:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {career.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <button
                      onClick={() => handleApply(career)}
                      className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition transform hover:scale-105"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
      
      {/* Application Modal would go here */}
    </div>
  );
};

export default Careers;