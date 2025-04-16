import { useState } from 'react';
import WorkspaceForm from '@/components/workspaceForm';

const Homepage = () => {
  const [showForm, setShowForm] = useState(false);
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Documento</h1>
      
      {isLoggedIn ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Workspaces</h2>
            <button 
              onClick={() => setShowForm(!showForm)} 
              className="btn btn-primary"
            >
              {showForm ? 'Cancel' : 'Create Workspace'}
            </button>
          </div>
          
          {showForm && <WorkspaceForm />}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="mb-4">Please log in to manage your workspaces</p>
          <a href="/login" className="btn btn-primary mr-2">Login</a>
          <a href="/register" className="btn btn-outline">Register</a>
        </div>
      )}
    </div>
  );
};

export default Homepage;