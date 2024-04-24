import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { authService } from '../../store/slices/authService';
import Form from '../../Components/Form';
import { useEffect } from 'react';



export default function SignInSide() {
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    authService.signIn({
        email,
        password
      })

  };
  
  const token = useSelector((state: any) => state.auth.token);
  const errorMsg = useSelector((state: any) => state.auth.errorMsg)
  
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);
  
  

  return (
    <Form 
        title='Sign in'     
        submitFunc={handleSubmit} 
        additionalText="Don't have an account? Sign Up" 
        navigate='/signup'
        errorText={errorMsg}
    />
  );
}