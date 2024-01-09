import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-6xl text-red-500">404</h1>
        <p className="text-xl mt-4 text-gray-700">Page Not Found</p>
      </div>
    </div>
  );
};

export default NotFoundPage;