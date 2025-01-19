import useLogin from "@/hooks/useLogin";
import { Button, Group, TextInput, PasswordInput, Card, Center } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { setEmail,  setPassword, error, handleLogin } = useLogin();
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
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        {/* insert documento logo */}
      </Card.Section>
      <form onSubmit={handleSubmit}>
        <TextInput
          variant="filled"
          withAsterisk
          onChange={(event) => setEmail(event.currentTarget.value)}
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          label="Password"
          variant="filled"
          placeholder="Your password"
          onChange={(event) => setPassword(event.currentTarget.value)}
          {...form.getInputProps('password')}
        />

        <Group position="center" mt="md" grow>
          <Button variant="filled" color="gray" onClick={() => navigate('/register')} >Sign up</Button>
          <Button type="submit">Login</Button>
        </Group>
        <Group justify="flex" mt="md">
          <Button variant="outline" color="gray" fullWidth>Forgot Password</Button>
        </Group>
      </form>
    </Card>
  );
}

export default LoginForm;
