import React from 'react';

const SASBenefitsPage = () => {
  return (
    <div id="buil" className="bg-gray-primary min-h-screen p-8">
      
      <h1 className="text-4xl font-bold text-gradient mb-4">
        Building And MarketCenter Management System SAS Service
      </h1>
      <h2 className="text-3xl font-bold text-white mb-6">
        Comprehensive Management Solution with SAS Benefits
      </h2>
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-white mb-2">Subscription Plan:</h3>
          <ul className="list-disc list-inside text-lg text-white">
            <li>1000 Birr per Month</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Free Services:</h3>
          <ul className="list-disc list-inside text-lg text-white">
            <li>Android and Web Application Included</li>
            <li>Compatibility with iPhone, Android, and Computers</li>
            <li>Complete Documentation: User Manual and Technician Document</li>
            <li>Free Customization, Training, Support, Deployment, Maintenance, and Server Monitoring</li>
            <li>Free Trial Access</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">System Includes:</h3>
        <ul className="list-disc list-inside text-lg text-white">
          <li>Web Application</li>
          <li>Desktop Computer App</li>
          <li>Finance System</li>
          <li>Building Information System</li>
          <li>Properties Management System</li>
        </ul>
      </div>
    </div>
  );
};

export default SASBenefitsPage;
