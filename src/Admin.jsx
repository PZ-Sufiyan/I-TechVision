import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { User, Mail, Phone, GraduationCap, Calendar, Clock, FileText, Briefcase, ExternalLink, Loader2, Search, X, Eye, Lock, LogOut } from 'lucide-react';

export default function Admin() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated (stored in sessionStorage)
    const authToken = sessionStorage.getItem('adminAuth');
    if (authToken) {
      setIsAuthenticated(true);
      setShowLogin(false);
      fetchApplications();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://i-tech-vision-backend.vercel.app/api/internship/applications', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch applications');
      }

      const result = await response.json();
      
      if (result.success) {
        setApplications(result.data);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const response = await fetch('https://i-tech-vision-backend.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Store authentication token in sessionStorage
        sessionStorage.setItem('adminAuth', result.token || 'authenticated');
        setIsAuthenticated(true);
        setShowLogin(false);
        setUsername('');
        setPassword('');
        // Fetch applications after successful login
        fetchApplications();
      } else {
        setLoginError(result.message || 'Invalid username or password');
      }
    } catch (err) {
      setLoginError('Login failed. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    setShowLogin(true);
    setApplications([]);
    setUsername('');
    setPassword('');
  };

  const filteredApplications = applications.filter(app => {
    const matchesFilter = filter === 'all' || app.internshipField === filter;
    const matchesSearch = 
      app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.phone.includes(searchQuery) ||
      app.internshipField.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const internshipFields = [...new Set(applications.map(app => app.internshipField))];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const openModal = (app) => {
    setSelectedApp(app);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedApp(null);
  };

  // Show login modal if not authenticated
  if (showLogin && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <Card className="p-8 border-gray-200 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Admin Login</h2>
              <p className="text-gray-600">Enter your credentials to access the dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter username"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              {loginError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <p className="text-red-600 text-sm font-medium">{loginError}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loginLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    Login
                  </>
                )}
              </button>
            </form>
          </Card>
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-teal-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading applications...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <Card className="p-8 max-w-md text-center border-red-200 bg-red-50">
          <div className="text-red-600 mb-4">
            <FileText className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Error Loading Applications</h3>
            <p>{error}</p>
          </div>
          <button 
            onClick={fetchApplications}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            Try Again
          </button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Compact Header */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-8 shadow-lg">
        <div className="w-full px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
              <p className="text-teal-100 mt-1">Total Applications: {applications.length}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="w-full px-6 lg:px-8 py-6 bg-white border-b border-gray-200">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, email, phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Field Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({applications.length})
            </button>
            {internshipFields.map((field) => (
              <button
                key={field}
                onClick={() => setFilter(field)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  filter === field
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {field} ({applications.filter(app => app.internshipField === field).length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full px-6 lg:px-8 py-6">
        <Card className="overflow-hidden border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Field
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApplications.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center">
                      <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">No applications found</p>
                      <p className="text-gray-400 text-sm">Try adjusting your search or filters</p>
                    </td>
                  </tr>
                ) : (
                  filteredApplications.map((app) => (
                    <tr key={app._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{app.fullName}</div>
                            <div className="text-sm text-gray-500">{app.university}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{app.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{app.phone}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className="bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0">
                          {app.internshipField}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className="bg-teal-100 text-teal-700 border-0">
                          {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => openModal(app)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {showModal && selectedApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-6 rounded-t-2xl flex items-center justify-between z-10">
                <div>
                  <h2 className="text-3xl font-bold">{selectedApp.fullName}</h2>
                  <p className="text-teal-100 mt-1">Application Details</p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all"
                >
                  <span className="w-6 h-6">X</span>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-teal-600" />
                      Personal Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-semibold text-gray-900">{selectedApp.fullName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-semibold text-gray-900">{selectedApp.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-semibold text-gray-900">{selectedApp.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Application Date</p>
                        <p className="font-semibold text-gray-900">{formatDate(selectedApp.applicationDate)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <Badge className="mt-1 bg-teal-100 text-teal-700 border-0">
                          {selectedApp.status.charAt(0).toUpperCase() + selectedApp.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Academic Details */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      Academic Details
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">University</p>
                        <p className="font-semibold text-gray-900">{selectedApp.university}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Degree</p>
                        <p className="font-semibold text-gray-900">{selectedApp.degree}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Semester</p>
                        <p className="font-semibold text-gray-900">{selectedApp.semester}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">CGPA</p>
                        <p className="font-semibold text-gray-900">{selectedApp.cgpa}</p>
                      </div>
                      {selectedApp.major !== 'N/A' && (
                        <div>
                          <p className="text-sm text-gray-500">Major</p>
                          <p className="font-semibold text-gray-900">{selectedApp.major}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Internship Details */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-purple-600" />
                    Internship Details
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-gray-500">Field</p>
                      <Badge className="mt-1 bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0">
                        {selectedApp.internshipField}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Start Date</p>
                      <p className="font-semibold text-gray-900 flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {formatDate(selectedApp.startDate)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-900 flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        {selectedApp.duration}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cover Letter & Experience */}
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-teal-600" />
                      Cover Letter
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {selectedApp.coverLetter}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-teal-600" />
                      Previous Experience
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {selectedApp.previousExperience}
                      </p>
                    </div>
                  </div>

                  {selectedApp.portfolioLink && (
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Portfolio</h3>
                      <a
                        href={selectedApp.portfolioLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Portfolio
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-gray-50 px-8 py-4 rounded-b-2xl flex justify-end gap-3 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
