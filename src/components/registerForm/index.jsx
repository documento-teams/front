import useRegister from "@/hooks/useRegister";
import { Button, Group, TextInput, PasswordInput, Card } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from "react-router-dom";

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
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <form onSubmit={handleSubmit}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <TextInput
          withAsterisk
          label="Fullname"
          placeholder="Your fullname"
          {...form.getInputProps('fullname')}
        />

        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Your password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          withAsterisk
          label="Confirm Password"
          placeholder="Confirm your password"
          {...form.getInputProps('confirmPassword')}
        />

        {error && <div style={{ color: 'red' }}>{error}</div>}

        <Group position="right" mt="md">
          <Button type="submit" disabled={!form.isValid()} style={{ width: '100%' }}>Register</Button>
        </Group>
        <Group justify="flex" mt="md">
          <Button variant="subtle" onClick={() => navigate('/login')}>Sign up</Button>
        </Group>
      </form>
    </Card>
  );
}

export default RegisterForm;