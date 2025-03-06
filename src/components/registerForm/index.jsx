import useRegister from "@/hooks/useRegister";
import { useNavigate } from "react-router-dom";
import { useForm } from '@mantine/form';

const RegisterForm = () => {
  const { error, handleRegister } = useRegister();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      fullname: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length > 6 ? null : 'Password must be at least 6 characters long'),
      confirmPassword: (value, values) => (value === values.password ? null : 'Passwords do not match'),
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleRegister(form.values);
  }

  return (
    <div className="card shadow-lg p-8 rounded-lg border-1 border-[#A084E8] backdrop-blur-md bg-white bg-opacity-20 dark:bg-opacity-50">
      <form onSubmit={handleSubmit} class="space-y-4">
        <div class="card-body">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-black text-center mb-4">Register</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text !text-[#c0a7eb] font-bold">Email</span>
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="input input-bordered border border-black bg-gray-100 
              text-gray-800 focus:bg-white focus:border-[#9F5FCE] focus:ring-2 
              focus:ring-[#9F5FCE] transition w-full"
            {...form.getInputProps('email')}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text !text-[#c0a7eb] font-bold">Fullname</span>
          </label>
          <input
            type="text"
            placeholder="Your fullname"
            className="input input-bordered border border-black bg-gray-100 
              text-gray-800 focus:bg-white focus:border-[#9F5FCE] focus:ring-2 
              focus:ring-[#9F5FCE] transition w-full"
            {...form.getInputProps('fullname')}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text !text-[#c0a7eb] font-bold">Password</span>
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

        <div className="form-control">
          <label className="label">
            <span className="label-text !text-[#c0a7eb] font-bold mr-2">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="input input-bordered border border-black bg-gray-100 
              text-gray-800 focus:bg-white focus:border-[#9F5FCE] focus:ring-2 
              focus:ring-[#9F5FCE] transition w-full"
            {...form.getInputProps('confirmPassword')}
          />
        </div>

        {error && <div className="text-red-500 mt-2">{error}</div>}

        <div className="form-control mt-4 flex justify-between items-center">
          <button 
            type="submit" 
            className="btn !bg-[#d7c8f3] hover:bg-[#9F5FCE] text-white transition w-1/2 mr-2"
            disabled={!form.isValid()}>
            Register
          </button>

          <button 
            type="button" 
            className="btn bg-[#A084E8] hover:bg-[#9F5FCE] text-white transition w-1/2 text-right"
            onClick={() => navigate('/login')}>
            Sign in
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;