import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleLogin = async (values) => {
    try {
      console.log('values:', values);
      console.log(".env", import.meta.env.VITE_URL_API)
      const response = await fetch(`${import.meta.env.VITE_URL_API}/api/auth/login`, {
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
      console.log('Success:', data);

      localStorage.setItem('token', data.token);

      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin,
  };
}
export default useLogin;
