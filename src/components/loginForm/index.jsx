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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card shadow-lg p-8 rounded-lg border border-[#A084E8] backdrop-blur-md bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-50">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center mb-4">Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">Email</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered border-[#A084E8] focus:border-[#9F5FCE] focus:ring-2 focus:ring-[#9F5FCE] transition w-full"
                onChange={(event) => setEmail(event.currentTarget.value)}
                {...form.getInputProps('email')}
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered border-[#A084E8] focus:border-[#9F5FCE] focus:ring-2 focus:ring-[#9F5FCE] transition w-full"
                onChange={(event) => setPassword(event.currentTarget.value)}
                {...form.getInputProps('password')}
              />
            </div>

            {/* Message d'erreur */}
            {error && <div className="text-red-500 text-center">{error}</div>}

            {/* Bouton Login */}
            <div className="form-control mt-4">
              <button 
                type="submit" 
                className="btn w-full bg-[#A084E8] hover:bg-[#9F5FCE] text-white transition"
                disabled={!form.isValid()}
              >
                Login
              </button>
            </div>

            {/* Sign Up */}
            <div className="text-center mt-2">
              <button 
                type="button" 
                className="text-[#A084E8] hover:underline transition"
                onClick={() => navigate('/register')}
              >
                Sign up
              </button>
            </div>

            {/* Forgot Password */}
            <div className="form-control mt-4">
              <button 
                type="button" 
                className="btn btn-outline border-[#A084E8] text-[#A084E8] hover:bg-[#9F5FCE] hover:text-white transition w-full"
                onClick={() => navigate('/forgot-password')}
              >
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
