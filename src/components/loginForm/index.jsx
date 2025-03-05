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
    <div className="card shadow-lg p-6 rounded-lg">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="input input-bordered"
              onChange={(event) => setEmail(event.currentTarget.value)}
              {...form.getInputProps('email')}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your password"
              className="input input-bordered"
              onChange={(event) => setPassword(event.currentTarget.value)}
              {...form.getInputProps('password')}
            />
          </div>

          {error && <div className="text-red-500 mt-2">{error}</div>}

          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary" disabled={!form.isValid()}>Login</button>
          </div>
          <div className="form-control mt-4">
            <button type="button" className="btn btn-link" onClick={() => navigate('/register')}>Sign up</button>
          </div>
          <div className="form-control mt-4">
            <button type="button" className="btn btn-outline" onClick={() => navigate('/forgot-password')}>Forgot Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;