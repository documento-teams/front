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
    <div className="card shadow-lg p-6 rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="input input-bordered"
            {...form.getInputProps('email')}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Fullname</span>
          </label>
          <input
            type="text"
            placeholder="Your fullname"
            className="input input-bordered"
            {...form.getInputProps('fullname')}
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
            {...form.getInputProps('password')}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="input input-bordered"
            {...form.getInputProps('confirmPassword')}
          />
        </div>

        {error && <div className="text-red-500 mt-2">{error}</div>}

        <div className="form-control mt-4">
          <button type="submit" className="btn btn-primary" disabled={!form.isValid()}>Register</button>
        </div>
        <div className="form-control mt-4">
          <button type="button" className="btn btn-link" onClick={() => navigate('/login')}>Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;