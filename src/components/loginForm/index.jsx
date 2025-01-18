import useLogin from "@/hooks/useLogin";
import { Button, Checkbox, Group, TextInput, PasswordInput, Card } from '@mantine/core';
import { useForm } from '@mantine/form';

const LoginForm = () => {
  const { email, setEmail, password, setPassword, error, handleLogin } = useLogin();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(form.values);
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        {/* insert documento logo */}
      </Card.Section>
      <form onSubmit={handleSubmit}>
        <TextInput
          withAsterisk
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          {...form.getInputProps('password')}
        />

        <Group justify="flex-end" mt="md">
          <Button variant="white">Forgot password?</Button>
          <Button type="submit">Submit</Button>
        </Group>
      </form>


    </Card>
  );
}

export default LoginForm;
