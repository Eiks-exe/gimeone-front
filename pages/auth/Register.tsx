import { Button, Grid, Paper, styled, SxProps, TextField } from '@mui/material';
import * as React from 'react';
import Layout from '../../components/Layout';
import { useForm } from 'react-hook-form';

interface IRegisterProps {
}

interface IFormInputs {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

const formStyle: SxProps = {
    color: 'sucess',
    backgroundColor: '#1a1a1a',
    '& label': {
        color: 'white',
    },
    '& label.Mui-focused': {
        color: 'white'
    }

}


const Register: React.FunctionComponent<IRegisterProps> = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm<IFormInputs>({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        mode: 'onTouched',
    });

    const { ref: firstNameRef, ...firstName } = register('firstName');
    const { ref: lastNameRef, ...lastName } = register('lastName');
    const { ref: emailRef, ...email } = register('email');
    const { ref: phoneNumberRef, ...phoneNumber } = register('phoneNumber');
    const { ref: passwordRef, ...password } = register('password');

    const HandleSubmit = (data: IFormInputs) => {
        console.log(data)
    }
    return (
        <Layout title="Signup">
            <Grid
                container
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    background: '#1a1a1a'
                }}
                className="Rbg"
            >
                <Grid item>
                    <Paper elevation={3} sx={{
                        minHeight: 500,
                        minWidth: 400,
                        background: '#404040'
                    }}>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item container spacing={3} sx={{
                                    padding: '1rem',
                                    margin: 0,
                                    flexDirection: 'column'
                                }}>
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
                                    <Grid item >
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
                                    <Grid item >
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
                                </Grid>

                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default Register;
