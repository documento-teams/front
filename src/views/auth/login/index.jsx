import BackgroundShapes from "@/components/abstractShape";
import DarkModeToggle from "@/components/darkmodToggle";
import LoginForm from "@/components/loginForm";
import { BackgroundImage } from "@mantine/core";

const Login = () => {
  return (

    
    <div className="relative flex items-center justify-center h-screen bg-base-200 transition-all duration-300 overflow-hidden">
  <div className="absolute top-4 right-4">
    <DarkModeToggle />
  </div>
  
<BackgroundShapes />  

      <div className="relative z-10">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
