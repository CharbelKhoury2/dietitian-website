import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  FileText, 
  TrendingUp, 
  MessageSquare,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download
} from 'lucide-react';
import { Button } from '../ui/Button';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: TrendingUp },
    { id: 'clients', name: 'Clients', icon: Users },
    { id: 'appointments', name: 'Appointments', icon: Calendar },
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'messages', name: 'Messages', icon: MessageSquare },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Clients', value: '127', change: '+12 this month', color: 'sage' },
    { label: 'This Week\'s Appointments', value: '23', change: '4 upcoming today', color: 'coral' },
    { label: 'Website Visitors', value: '2,847', change: '+18% this month', color: 'charcoal' },
    { label: 'Conversion Rate', value: '3.2%', change: '+0.3% vs last month', color: 'sage' },
  ];

  const recentClients = [
    { name: 'Maria Rodriguez', service: 'Weight Management', lastVisit: '2024-01-20', status: 'Active' },
    { name: 'David Chen', service: 'Diabetes Management', lastVisit: '2024-01-18', status: 'Active' },
    { name: 'Jennifer Park', service: 'Sports Nutrition', lastVisit: '2024-01-15', status: 'Completed' },
    { name: 'Lisa Thompson', service: 'Pediatric Nutrition', lastVisit: '2024-01-12', status: 'Active' },
  ];

  const upcomingAppointments = [
    { client: 'Sarah Kim', service: 'Initial Consultation', date: '2024-01-25', time: '10:00 AM', type: 'Virtual' },
    { client: 'Michael Rodriguez', service: 'Follow-up', date: '2024-01-25', time: '2:00 PM', type: 'In-person' },
    { client: 'Amanda Foster', service: 'Medical Nutrition', date: '2024-01-26', time: '9:00 AM', type: 'Virtual' },
  ];

  const blogPosts = [
    { title: '10 Evidence-Based Strategies for Sustainable Weight Loss', status: 'Published', date: '2024-01-15', views: 1247 },
    { title: 'Managing Diabetes Through Nutrition', status: 'Published', date: '2024-01-12', views: 892 },
    { title: 'Heart-Healthy Mediterranean Recipes', status: 'Draft', date: '2024-01-10', views: 0 },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-sage-100">
            <div className="text-2xl font-bold text-charcoal-900 mb-1">{stat.value}</div>
            <div className="text-sm text-charcoal-600 mb-2">{stat.label}</div>
            <div className="text-xs text-sage-600">{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Clients */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-sage-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-poppins font-semibold text-charcoal-900">Recent Clients</h3>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {recentClients.map((client, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-sage-50 last:border-0">
                <div>
                  <div className="font-medium text-charcoal-900">{client.name}</div>
                  <div className="text-sm text-charcoal-600">{client.service}</div>
                </div>
                <div className="text-right">
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    client.status === 'Active' ? 'bg-sage-100 text-sage-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {client.status}
                  </div>
                  <div className="text-xs text-charcoal-500 mt-1">{client.lastVisit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-sage-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-poppins font-semibold text-charcoal-900">Upcoming Appointments</h3>
            <Button variant="ghost" size="sm">View Calendar</Button>
          </div>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-sage-50 last:border-0">
                <div>
                  <div className="font-medium text-charcoal-900">{appointment.client}</div>
                  <div className="text-sm text-charcoal-600">{appointment.service}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-charcoal-900">{appointment.date}</div>
                  <div className="text-xs text-charcoal-600">{appointment.time} • {appointment.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-poppins font-bold text-charcoal-900">Content Management</h2>
        <Button className="flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-sage-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-sage-100">
          <h3 className="font-poppins font-semibold text-charcoal-900">Blog Posts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-sage-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-charcoal-600 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-charcoal-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-charcoal-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-charcoal-600 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-charcoal-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sage-100">
              {blogPosts.map((post, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-charcoal-900">{post.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      post.status === 'Published' 
                        ? 'bg-sage-100 text-sage-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal-600">
                    {post.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal-600">
                    {post.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-charcoal-600 hover:text-sage-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-charcoal-600 hover:text-sage-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-charcoal-600 hover:text-coral-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'content':
        return renderContent();
      case 'clients':
        return (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-sage-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-charcoal-900 mb-2">Client Management</h3>
            <p className="text-charcoal-600">Client management features would be implemented here</p>
          </div>
        );
      case 'appointments':
        return (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-sage-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-charcoal-900 mb-2">Appointment Management</h3>
            <p className="text-charcoal-600">Calendar and appointment features would be implemented here</p>
          </div>
        );
      case 'messages':
        return (
          <div className="text-center py-12">
            <MessageSquare className="w-12 h-12 text-sage-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-charcoal-900 mb-2">Message Center</h3>
            <p className="text-charcoal-600">Client messages and communications would be managed here</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-12">
            <Settings className="w-12 h-12 text-sage-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-charcoal-900 mb-2">Settings</h3>
            <p className="text-charcoal-600">System settings and preferences would be configured here</p>
          </div>
        );
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-ivory-200">
      {/* Header */}
      <div className="bg-white border-b border-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-poppins font-bold text-charcoal-900">
              Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <div className="w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">SC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl p-4 shadow-sm border border-sage-100">
              <div className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-sage-100 text-sage-700'
                          : 'text-charcoal-600 hover:bg-sage-50 hover:text-sage-700'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {tab.name}
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
