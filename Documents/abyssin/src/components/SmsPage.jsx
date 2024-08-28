import React from 'react';

const SmsPage = () => {
  return (
    <div id="smss" className="bg-gray-primary min-h-screen p-8">
      
      <h1 className="text-4xl font-bold text-gradient mb-4">
      School System SAS Service
      </h1>
      <h2 className="text-3xl font-bold text-white mb-6">
      Comprehensive School Management Solution with SAS Benefits
      </h2>
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-white mb-2">Subscription Plan:</h3>
          <ul className="list-disc list-inside text-lg text-white">
            <li>1 Birr per Month per Student</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Free Services:</h3>
          <ul className="list-disc list-inside text-lg text-white">
            <li>Android App for Teachers, Students, Student Parents, Accountant, and School Admin/Director</li>
            <li>Compatibility with iPhone, Android, and Computers</li>
            <li>Works Online or Offline</li>
            <li>Complete Documentation: User Manual and Technician Document</li>
            <li>Free Customization, Training, Support, Deployment, Maintenance, and Server Monitoring</li>
            <li>Free Trial Access</li>
            <li>Additional Android Application Included</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">System Includes:</h3>
        <ul className="list-disc list-inside text-lg text-white">
          <li>Separate Android App for All Users: Teachers, Accountants, Students, Administrators</li>
          <li>School Website</li>
          <li>Desktop Computer App</li>
          <li>Finance System</li>
          <li>Student Information System</li>
          <li>Student Grading System</li>
          <li>Online Learning Management System</li>
          <li>Library Management System</li>
        </ul>
      </div>
    </div>
  );
};

export default SmsPage;
