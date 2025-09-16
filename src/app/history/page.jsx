import React from 'react';

const TransactionList = () => {
  const transactions = [
    {
      id: '#695623',
      amount: '258 CHF',
      type: 'Special Offers Package',
      date: '05-12-2025',
      user: {
        name: 'Cameron Williamson',
        address: '4517 Washington Ave'
      }
    },
    {
      id: '#695623',
      amount: '258 CHF',
      type: 'Special Offers Package',
      date: '05-12-2025',
      user: {
        name: 'Cameron Williamson',
        address: '4517 Washington Ave'
      }
    },
    {
      id: '#695623',
      amount: '258 CHF',
      type: 'Special Offers Package',
      date: '05-12-2025',
      user: {
        name: 'Cameron Williamson',
        address: '4517 Washington Ave'
      }
    },
    {
      id: '#695623',
      amount: '258 CHF',
      type: 'Special Offers Package',
      date: '05-12-2025',
      user: {
        name: 'Cameron Williamson',
        address: '4517 Washington Ave'
      }
    },
    {
      id: '#695623',
      amount: '258 CHF',
      type: 'Special Offers Package',
      date: '05-12-2025',
      user: {
        name: 'Cameron Williamson',
        address: '4517 Washington Ave'
      }
    },
    {
      id: '#695623',
      amount: '258 CHF',
      type: 'Special Offers Package',
      date: '05-12-2025',
      user: {
        name: 'Cameron Williamson',
        address: '4517 Washington Ave'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-semibold text-gray-900">Transactions</h1>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Export
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                + Add New
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700 uppercase tracking-wider">
              <div className="col-span-2">Transaction ID</div>
              <div className="col-span-2">Amount</div>
              <div className="col-span-3">Description</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-3">Customer</div>
            </div>
          </div>

          {/* Transaction Items */}
          <div className="divide-y divide-gray-200">
            {transactions.map((transaction, index) => (
              <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Transaction ID */}
                  <div className="col-span-2">
                    <span className="font-mono text-sm font-medium text-gray-900">
                      {transaction.id}
                    </span>
                  </div>

                  {/* Amount */}
                  <div className="col-span-2">
                    <span className="text-lg font-semibold text-gray-900">
                      {transaction.amount}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="col-span-3">
                    <span className="text-sm text-gray-600">
                      {transaction.type}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="col-span-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {transaction.date}
                    </span>
                  </div>

                  {/* Customer Info */}
                  <div className="col-span-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-sm font-medium text-white">
                            {transaction.user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {transaction.user.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {transaction.user.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
                <span className="font-medium">97</span> results
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50">
                  Previous
                </button>
                <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                  1
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  3
                </button>
                <span className="px-3 py-2 text-sm text-gray-500">...</span>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  10
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">1,548 CHF</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Transactions</p>
                <p className="text-2xl font-semibold text-gray-900">97</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Customers</p>
                <p className="text-2xl font-semibold text-gray-900">24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;