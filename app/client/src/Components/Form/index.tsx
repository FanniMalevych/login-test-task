import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import bg from '../../assets/login_screen.png'
import { FormHelperText } from '@mui/material';
import { useState } from 'react';


interface IFormData {
    validate?: boolean,
    submitFunc: (event: React.FormEvent<HTMLFormElement>) => void,
    title: string,
    additionalText: string,
    navigate: string,
    errorText?: string
}



export default function Form(formData: IFormData) {
  const {validate, submitFunc, title, additionalText, navigate, errorText} = formData

  const [emailError, setEmailError] = useState('');
  const [email, setEmail] = useState("");
  const [passError, setPassError] = useState('');
  const [password, setPassword] = useState("");
  const handleEmailChange = e => {
    setEmail(e.target.value);
    if (validate) {
        if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(e.target.value)) {
            setEmailError("Invalid email address");
          } else {
            setEmailError('');
          }
    }
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value)
    if(validate) {
        if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.target.value)) {
            setPassError("Password should contain minimum eight characters, at least one letter and one number")
        } else {
            setPassError('')
        }
    }
  }

  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              {title}
            </Typography>
            <Box component="form" noValidate onSubmit={submitFunc} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
                error={!!emailError}
                helperText={emailError}
                color='secondary'
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
                error={!!passError}
                helperText={passError}
                color='secondary'
              />
              <FormHelperText error={!!errorText}>{errorText}</FormHelperText>
              <Button
                type="submit"
                fullWidth
                variant="contained" color="success"
                sx={{ mt: 3, mb: 2, }}
              >
                {title}
              </Button>
              <Grid container>
                <Grid item>
                  <Link to={navigate}>
                    {additionalText}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}