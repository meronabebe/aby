import React from 'react';

const InnovationPage = () => {
  return (
    <div id="erp" className="bg-gray-primary min-h-screen p-8">
      
      <h1 className="text-4xl font-bold text-gradient mb-4">
      ERP System SAS Service
      </h1>
      <h2 className="text-3xl font-bold text-white mb-6">
      Comprehensive ERP Solution with SAS Benefits
      </h2>
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-white mb-2">Subscription Plan:</h3>
          <ul className="list-disc list-inside text-lg text-white">
            <li>For One Month: 2500 Birr</li>
            <li>For Three Months: 7000 Birr</li>
            <li>For One Year: 13000 Birr</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Free Services:</h3>
          <ul className="list-disc list-inside text-lg text-white">
            <li>Additional Android Application for Sales, Storekeeper, and Managers</li>
            <li>Compatibility with iPhone, Android, and Computers</li>
            <li>Complete Documentation: User Manual and Technician Document</li>
            <li>Works Online or Offline</li>
            <li>Free Trial Access</li>
            <li>Free Customization, Training, Support, Deployment, Maintenance, and Server Monitoring</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">System Includes:</h3>
        <ul className="list-disc list-inside text-lg text-white">
          <li>Finance and Accounting System</li>
          <li>Inventory and Warehouse Management System</li>
          <li>Human Resource Management System</li>
          <li>Customer Relationship Management (CRM) System</li>
          <li>Point of Sale (POS) System</li>
          <li>Supply Chain Management System</li>
        </ul>
      </div>
    </div>
  );
};

export default InnovationPage;
