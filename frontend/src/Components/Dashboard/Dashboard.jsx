import React, { useState } from 'react';
import { FiMenu, FiUser, FiBell, FiMessageSquare, FiPieChart, FiCalendar, FiSettings, FiLogOut } from 'react-icons/fi';
import { FaChalkboardTeacher, FaUserGraduate, FaBook } from 'react-icons/fa';

const Dashboard = () => {
  // Using the same theme from ImageSlider
  const theme = {
    primaryColor: '#E91E63',       // Primary brand color (red)
    secondaryColor: '#6C63FF',     // Secondary color (purple)
    textColor: '#FFFFFF',          // Main text color
    accentTextColor: '#F3F4F6',    // Secondary text color
    buttonHoverColor: '#C5112E',   // Darker red for button hover
    dotActiveColor: '#EE2341',     // Active dot color
    overlayColor: 'rgba(0, 0, 0, 0.5)', // Image overlay
    cardBg: 'rgba(255, 255, 255, 0.1)', // Card background
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample data
  const stats = [
    { title: "Total Students", value: "1,245", icon: <FaUserGraduate className="text-2xl" />, change: "+12%", trend: 'up' },
    { title: "Active Courses", value: "24", icon: <FaBook className="text-2xl" />, change: "+3", trend: 'up' },
    { title: "Teachers", value: "48", icon: <FaChalkboardTeacher className="text-2xl" />, change: "+5", trend: 'up' },
    { title: "Attendance", value: "89%", icon: <FiPieChart className="text-2xl" />, change: "-2%", trend: 'down' },
  ];

 

  return (
    <div className="flex  bg-gray-100">
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg"
        style={{ backgroundColor: theme.primaryColor, color: theme.textColor }}
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      >
        <FiMenu className="h-6 w-6" />
      </button>

      <div 
        className={`${sidebarOpen ? 'w-64' : 'w-20'} ${mobileSidebarOpen ? 'block' : 'hidden'} md:block bg-gray-900 text-white transition-all duration-300 fixed h-full z-40`}
        style={{ backgroundColor: '#0f172a' }}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold" style={{ color: theme.textColor }}>BunnyLearn</h1>
          ) : (
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: theme.primaryColor }}></div>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-full hover:bg-gray-700 hidden md:block"
          >
            <FiMenu className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-6">
          <NavItem 
            icon={<FiPieChart />} 
            text="Dashboard" 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')}
            sidebarOpen={sidebarOpen}
            theme={theme}
          />
          <NavItem 
            icon={<FaUserGraduate />} 
            text="Students" 
            active={activeTab === 'students'} 
            onClick={() => setActiveTab('students')}
            sidebarOpen={sidebarOpen}
            theme={theme}
          />
          <NavItem 
            icon={<FaChalkboardTeacher />} 
            text="Teachers" 
            active={activeTab === 'teachers'} 
            onClick={() => setActiveTab('teachers')}
            sidebarOpen={sidebarOpen}
            theme={theme}
          />
          <NavItem 
            icon={<FaBook />} 
            text="Courses" 
            active={activeTab === 'courses'} 
            onClick={() => setActiveTab('courses')}
            sidebarOpen={sidebarOpen}
            theme={theme}
          />
          <NavItem 
            icon={<FiCalendar />} 
            text="Calendar" 
            active={activeTab === 'calendar'} 
            onClick={() => setActiveTab('/')}
            sidebarOpen={sidebarOpen}
            theme={theme}
          />
          <NavItem 
            icon={<FiMessageSquare />} 
            text="Messages" 
            active={activeTab === 'messages'} 
            onClick={() => setActiveTab('messages')}
            sidebarOpen={sidebarOpen}
            theme={theme}
          />
          <NavItem 
            icon={<FiSettings />} 
            text="Settings" 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')}
            sidebarOpen={sidebarOpen}
            theme={theme}
          />
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <FiLogOut className="h-5 w-5" style={{ color: theme.accentTextColor }} />
            {sidebarOpen && (
              <span className="ml-3" style={{ color: theme.accentTextColor }}>Logout</span>
            )}
          </button>
        </div>
      </div>

      <div className={`flex-1 ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'} transition-all duration-300`}>
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full relative hover:bg-gray-100">
                <FiBell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full" style={{ backgroundColor: theme.primaryColor }}></span>
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {sidebarOpen && (
                  <span className="text-sm font-medium text-gray-700">Admin User</span>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="p-6 bg-gray-50 min-h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                      <h3 className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</h3>
                    </div>
                    <div 
                      className={`p-3 rounded-lg ${stat.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
                    >
                      {stat.icon}
                    </div>
                  </div>
                  <p className={`mt-3 text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <span>{stat.change}</span> from last week
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-2">
            <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Student Performance</h2>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-1 focus:outline-none">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>
              </div>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Chart will appear here</p>
              </div>
            </div>

           
          </div>

         
        </main>
      </div>
    </div>
  );
};

// Reusable Components
const NavItem = ({ icon, text, active, onClick, sidebarOpen, theme }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full p-3 ${active ? 'bg-gray-800' : 'hover:bg-gray-800'} transition-colors`}
  >
    <span 
      className={`p-2 rounded-lg ${active ? 'text-white' : 'text-gray-400'}`}
      style={active ? { backgroundColor: theme.primaryColor } : {}}
    >
      {icon}
    </span>
    {sidebarOpen && (
      <span className={`ml-3 ${active ? 'text-white font-medium' : 'text-gray-400'}`}>{text}</span>
    )}
  </button>
);



export default Dashboard;