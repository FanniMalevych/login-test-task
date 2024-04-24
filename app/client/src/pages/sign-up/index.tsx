import { useNavigate } from "react-router-dom";
import { authService } from '../../store/slices/authService';
import { useSelector } from 'react-redux';
import Form from '../../Components/Form';
import { useEffect } from 'react';



export default function SignUpSide() {
    const navigate = useNavigate()
    const token = useSelector((state) => state.auth.token);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    authService.signUp({email,password})
  };

    useEffect(() => {
        if (token) {
        navigate('/');
        }
    }, [token]);

    return (
        <Form validate submitFunc={handleSubmit} title='Sign up' navigate='/login' addText='Already have an account? Sign In'/>
    );
}