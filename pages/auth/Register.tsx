import * as React from 'react';
import RouterLink from 'next/link';
import Layout from '../../components/Layout';
import {
  Button,
  Grid,
  Link,
  Paper,
  styled,
  SxProps,
  TextField,
  Typography,
} from '@mui/material';
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
  firstName: string;
  lastName: string;
  phoneNumber: string;
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
  firstName: yup.string().required('Oups, somethings is missing here.'),
  lastName: yup.string().required('Oups, somethings is missing here.'),
  phoneNumber: yup
    .string()
    .test('isPhoneNumber', 'Can you recheck here.', (v) => {
      if (v?.length == 0) return true;
      return validator.isMobilePhone(v || '', 'any');
    }),
});

const Register: NextPage = () => {
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

  const { ref: firstNameRef, ...firstName } = register('firstName');
  const { ref: lastNameRef, ...lastName } = register('lastName');
  const { ref: emailRef, ...email } = register('email');
  const { ref: phoneNumberRef, ...phoneNumber } = register('phoneNumber');
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
    <Layout title="Signup">
      <Grid
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: '#1a1a1a',
          overflow: 'hidden',
        }}
        className="Rbg"
      >
        <Grid item>
          <ClientOnly>
            <animated.div style={animatedStyles}>
              <Paper
                elevation={3}
                sx={{
                  minWidth: paperWidth,
                  background: '#404040',
                }}
              >
                <form onSubmit={handleSubmit(HandleSubmit)}>
                  <Grid container spacing={2} sx={{}}>
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
                          label="First Name"
                          inputRef={firstNameRef}
                          {...firstName}
                          fullWidth
                          required
                          variant="outlined"
                          type="text"
                          autoComplete="given-name"
                          error={Boolean(errors.firstName)}
                          helperText={errors.firstName?.message}
                          sx={formStyle}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          label="Last Name"
                          inputRef={lastNameRef}
                          {...lastName}
                          fullWidth
                          required
                          variant="outlined"
                          type="text"
                          autoComplete="family-name"
                          error={Boolean(errors.lastName)}
                          helperText={errors.lastName?.message}
                          sx={formStyle}
                        />
                      </Grid>
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
                          label="Phone number"
                          inputRef={phoneNumberRef}
                          {...phoneNumber}
                          fullWidth
                          required
                          variant="outlined"
                          autoComplete="tel"
                          error={Boolean(errors.phoneNumber)}
                          helperText={errors.phoneNumber?.message}
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
                          Already have an account ?{' '}
                          <RouterLink href="/auth/Login" passHref>
                            <Link>Log in</Link>
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
      </Grid>
    </Layout>
  );
};

export default Register;
