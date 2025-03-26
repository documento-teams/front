import RegisterForm from "@/components/registerForm"
import BackgroundShapes from "@/components/abstractShape";
import DarkModeToggle from "@/components/darkmodToggle";
import { BackgroundImage } from "@mantine/core";
const Register = () => {
  return (
    
    <div className="relative flex items-center justify-center h-screen bg-base-200 transition-all duration-300 overflow-hidden">
        <div className="absolute top-4 right-4">
    <DarkModeToggle />
  </div>
  
<BackgroundShapes />  
      <RegisterForm />
    </div>

  )
}

export default Register