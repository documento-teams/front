import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import Checkbox from "@/components/ui/CheckBox";
import useLogin from "@/hooks/useLogin";

const LoginForm = () => {
  const { email, setEmail, password, setPassword, error, handleLogin } = useLogin();

  return (
    <form onSubmit={handleLogin}>
      <InputField 
        label="Email" 
        type="email" 
        id="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        helperText="Enter your email address"
      />
      <InputField 
        label="Password" 
        type="password" 
        id="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
        helperText="Enter your password"
      />
      {/* <Checkbox label="Remember me" /> */}
      <Button label="Login" type="submit" borderColor="#9F5FCE" backgroundColor="#C28FFF" />
    </form>
  );
}

export default LoginForm; 