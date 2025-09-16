"use client"
import React, { useState } from 'react';
import { Bell, Package, CheckCircle, X, Filter, Search, MoreVertical } from 'lucide-react';

const NotificationsFeed = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "A new Product is added",
      description: "Product name, Brand name, Price $1070.000 is added in our collection!",
      timestamp: "20-Dec-2024, 3:00 PM",
      isRead: false,
      type: "product"
    },
    {
      id: 2,
      title: "A new Product is added",
      description: "Product name, Brand name, Price $1070.000 is added in our collection!",
      timestamp: "20-Dec-2024, 3:00 PM",
      isRead: false,
      type: "product"
    },
    {
      id: 3,
      title: "A new Product is added",
      description: "Product name, Brand name, Price $1070.000 is added in our collection!",
      timestamp: "20-Dec-2024, 3:00 PM",
      isRead: false,
      type: "product"
    },
    {
      id: 4,
      title: "A new Product is added",
      description: "Product name, Brand name, Price $1070.000 is added in our collection!",
      timestamp: "20-Dec-2024, 3:00 PM",
      isRead: false,
      type: "product"
    },
    {
      id: 5,
      title: "A new Product is added",
      description: "Product name, Brand name, Price $1070.000 is added in our collection!",
      timestamp: "20-Dec-2024, 3:00 PM",
      isRead: false,
      type: "product"
    },
    {
      id: 6,
      title: "A new Product is added",
      description: "Product name, Brand name, Price $1070.000 is added in our collection!",
      timestamp: "20-Dec-2024, 3:00 PM",
      isRead: false,
      type: "product"
    },
    {
      id: 7,
      title: "A new Product is added",
      description: "Product name, Brand name, Price $1070.000 is added in our collection!",
      timestamp: "20-Dec-2024, 3:00 PM",
      isRead: false,
      type: "product"
    },
    {
      id: 8,
      title: "A new Product is added",
      description: "Product name, Brand name, Price $1070.000 is added in our collection!",
      timestamp: "20-Dec-2024, 3:00 PM",
      isRead: false,
      type: "product"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, isRead: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bell className="h-8 w-8 text-blue-600" />
                {unreadCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
                <p className="text-sm text-gray-500">
                  {unreadCount} unread notifications
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={markAllAsRead}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                disabled={unreadCount === 0}
              >
                Mark all as read
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All notifications</option>
                <option value="unread">Unread only</option>
                <option value="product">Product updates</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white rounded-lg shadow-sm border transition-all duration-200 hover:shadow-md ${
                !notification.isRead ? 'border-l-4 border-l-blue-500 bg-blue-50/30' : 'border-l-4 border-l-transparent'
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    {/* Icon */}
                    <div className={`flex-shrink-0 p-2 rounded-lg ${
                      !notification.isRead ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <Package className={`h-5 w-5 ${
                        !notification.isRead ? 'text-blue-600' : 'text-gray-500'
                      }`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className={`text-sm font-medium ${
                          !notification.isRead ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {notification.title}
                        </h3>
                        {!notification.isRead && (
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {notification.description}
                      </p>
                      <p className="text-xs text-gray-400">
                        {notification.timestamp}
                      </p>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center space-x-2 ml-4">
                    {!notification.isRead && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"
                        title="Mark as read"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                      title="Delete notification"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors">
            Load more notifications
          </button>
        </div>

        {/* Empty State (hidden when there are notifications) */}
        {notifications.length === 0 && (
          <div className="text-center py-12">
            <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
            <p className="text-gray-500">You're all caught up! Check back later for new updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsFeed;