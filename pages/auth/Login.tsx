import {
  Button,
  Grid,
  Typography,
  Paper,
  TextField,
  Link,
} from '@mui/material';
import * as React from 'react';
import Layout from '../../components/Layout';
import RouterLink from 'next/link';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import validator from 'validator';
import formStyle from './formStyle';
import { NextPage } from 'next';
import { useSpring, animated } from 'react-spring';
import useWindowDimensions from '../../utils/useWindowDimensions';
import ClientOnly from '../../utils/ClientOnly';

interface IFormInputs {
  email: string;
  password: string;
}

const passwordRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/\\~_+\-=|]).{8,32}$/i;
const schema = yup.object().shape({
  email: yup
    .string()
    .email('Seem not to be an email.')
    .required('Oups, somethings is missing here.'),
  password: yup
    .string()
    .matches(passwordRegex, 'Hmmm, it seem too easy.')
    .required('Oups, somethings is missing here.'),
});

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IFormInputs>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const { ref: emailRef, ...email } = register('email');
  const { ref: passwordRef, ...password } = register('password');

  const HandleSubmit = async (data: IFormInputs) => {
    console.log(data);
  };

  //#region Spring
  const paperWidth = 400;
  const { width } = useWindowDimensions();
  const [animation, setAnimation] = React.useState(true);
  const animatedStyles = useSpring({
    marginLeft: animation && width ? width + paperWidth : 0,
  });
  React.useEffect(() => {
    setAnimation(false);
  }, []);
  //#endregion

  return (
    <Layout title="sign in">
      <Grid
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: 'black',
        }}
      >
        <ClientOnly>
          <animated.div style={animatedStyles}>
            <Paper
              elevation={3}
              sx={{
                minWidth: 400,
                background: '#404040',
              }}
            >
              <form onSubmit={handleSubmit(HandleSubmit)}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Grid
                    item
                    container
                    spacing={3}
                    sx={{
                      padding: '1rem',
                      margin: 0,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Grid item>
                      <TextField
                        label="Email"
                        inputRef={emailRef}
                        {...email}
                        fullWidth
                        required
                        variant="outlined"
                        autoComplete="email"
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                        sx={formStyle}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Password"
                        inputRef={passwordRef}
                        {...password}
                        type="password"
                        fullWidth
                        required
                        variant="outlined"
                        autoComplete="new-password"
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                        sx={formStyle}
                      />
                    </Grid>
                    <Grid item>
                      <Button type="submit" variant="contained">
                        Sign up
                      </Button>
                    </Grid>
                    <Grid item>
                      <Typography>
                        Don't have an account yet ?{' '}
                        <RouterLink href="/auth/Register" passHref>
                          <Link>Register</Link>
                        </RouterLink>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </animated.div>
        </ClientOnly>
      </Grid>
    </Layout>
  );
};

export default Login;
