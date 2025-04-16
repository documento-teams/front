import { useState, useEffect } from 'react';

const useWorkspace = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchWorkspaces = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${import.meta.env.VITE_URL_API}/api/workspaces`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const result = await response.json();
      setWorkspaces(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  
  const createWorkspace = async (workspaceData) => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${import.meta.env.VITE_URL_API}/api/workspaces`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(workspaceData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to create workspace');
      }
      
      const newWorkspace = await response.json();
      setWorkspaces(prev => [...prev, newWorkspace]);
      return newWorkspace;
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  return { workspaces, loading, error, createWorkspace, refreshWorkspaces: fetchWorkspaces };
}

export default useWorkspace;