import { useState } from 'react';
import useWorkspace from '@/hooks/useWorkspace';
import { useNavigate } from 'react-router-dom';

const WorkspaceForm = () => {
  const [name, setName] = useState('');
  const { createWorkspace, error } = useWorkspace();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId;
      
      await createWorkspace({
        name,
        workspaceAuthor: userId
      });
      
      navigate('/workspaces');
    } catch (err) {
      console.error('Error creating workspace:', err);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl w-full max-w-md mx-auto">
      <div className="card-body">
        <h2 className="card-title">Create New Workspace</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Workspace Name</span>
            </label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered" 
              required 
            />
          </div>
          
          {error && <p className="text-error mt-2">{error.message}</p>}
          
          <div className="card-actions justify-end mt-4">
            <button type="submit" className="btn btn-primary">Create Workspace</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkspaceForm;