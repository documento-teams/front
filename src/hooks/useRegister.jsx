import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useRegister = () => { 
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL_API}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // console.log('Success:', data);

      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };
  return {
    error,
    handleRegister,
  };
};

export default useRegister;