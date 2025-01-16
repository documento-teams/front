import LoginForm from '@/components/auth/loginForm';
import DocumentoIcon from '@/components/ui/Icons/DocumentoIcon';

const LoginPage = () => {
  return (
    <>
      <div className="grid justify-center">
        <div className="flex justify-center mb-[50px]">
          <DocumentoIcon width={272} height={280} />
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;