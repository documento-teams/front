import useLogin from "@/hooks/useLogin";
import { useForm } from '@mantine/form';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { setEmail, setPassword, error, handleLogin } = useLogin();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleLogin(form.values);
  }

  return (
    <div className="flex justify-center items-center min-h-screen gi">
      <div className="card shadow-lg p-8 rounded-lg border-1 border-[#A084E8] backdrop-blur-md bg-white bg-opacity-20 dark:bg-opacity-50">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-black text-center mb-4">Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#c0a7eb] font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered border border-black bg-gray-100 
                text-gray-800 focus:bg-white focus:border-[#9F5FCE] focus:ring-2 
                focus:ring-[#9F5FCE] transition w-full"
                onChange={(event) => setEmail(event.currentTarget.value)}
                {...form.getInputProps('email')}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#c0a7eb] font-bold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered border border-black bg-gray-100 
                text-gray-800 focus:bg-white focus:border-[#9F5FCE] focus:ring-2 
                focus:ring-[#9F5FCE] transition w-full"
                {...form.getInputProps('password')}
              />
            </div>

            {error && <div className="text-red-500 text-center">{error}</div>}

            <div className="form-control mt-4 flex justify-between items-center">
              <button 
                type="submit" 
                className="btn !bg-[#d7c8f3] hover:bg-[#9F5FCE] !text-white transition w-1/2 mr-2"
                disabled={!form.isValid()}>
                Login
              </button>

              <button 
                type="button" 
                className="btn bg-[#A084E8] hover:bg-[#9F5FCE] text-white transition w-1/2 text-right"
                onClick={() => navigate('/register')}>
                Sign up
              </button>
            </div>
            
            <div className="form-control mt-4">
              <button 
                type="button" 
                className="btn btn-outline border-[#A084E8] text-[#A084E8] hover:bg-[#9F5FCE] hover:text-white transition w-full font-popins"
                onClick={() => navigate('/forgot-password')}>
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;