import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Input, Switch, Button, Spin } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { AuthContext } from 'context/AuthProvider';
import { FieldWrapper, SwitchWrapper, Label } from '../Auth.style';

export default () => {
    const { signUp, loggedIn, checkAvailableEmail } = useContext(AuthContext);
    const { control, watch, errors, handleSubmit } = useForm({
        mode: 'onChange',
    });
    const [loading, setLoading] = useState(false);
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');
    const onSubmit = async (data) => {
        setLoading(true)
        const checkEmail = await checkAvailableEmail(data.email);
        if (checkEmail && checkEmail.status === 'OK') {
            const res = await signUp(data);
            if (res && res.status === 'OK') {
                setLoading(false);
            }
        } else {
            setLoading(false);
        };
    };
    if (loggedIn) {
        return <Redirect to={{ pathname: '/' }} />;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
                label="Nama Depan"
                htmlFor="namadepan"
                error={
                    errors.firstname && (
                        <>
                            {errors.firstname?.type === 'required' && (
                                <span>This field is required!</span>
                            )}
                        </>
                    )
                }
            >
                <Controller
                    as={<Input />}
                    id="namadepan"
                    name="namadepan"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: true,
                    }}
                    disabled={loading}
                />
            </FormControl>
            <FormControl
                label="Nama Belakang"
                htmlFor="namabelakang"
                error={
                    errors.lastname && (
                        <>
                            {errors.lastname?.type === 'required' && (
                                <span>This field is required!</span>
                            )}
                        </>
                    )
                }
            >
                <Controller
                    as={<Input />}
                    id="namabelakang"
                    name="namabelakang"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: true,
                    }}
                    disabled={loading}
                />
            </FormControl>
            <FormControl
                label="Email"
                htmlFor="email"
                error={
                    errors.email && (
                        <>
                            {errors.email?.type === 'required' && (
                                <span>This field is required!</span>
                            )}
                            {errors.email?.type === 'pattern' && (
                                <span>Please enter a valid email address!</span>
                            )}
                        </>
                    )
                }
            >
                <Controller
                    as={<Input />}
                    type="email"
                    id="email"
                    name="email"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: true,
                        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    }}
                    disabled={loading}
                />
            </FormControl>
            <FormControl
                label="No telepon"
                htmlFor="telp"
                error={
                    errors.telp && (
                        <>
                            {errors.telp?.type === 'required' && (
                                <span>This field is required!</span>
                            )}
                            {errors.telp?.type === 'pattern' && (
                                <span>Please enter a valid email address!</span>
                            )}
                        </>
                    )
                }
            >
                <Controller
                    as={<Input />}
                    type="telp"
                    id="telp"
                    name="telp"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: true,
                    }}
                    disabled={loading}
                />
            </FormControl>
            <FormControl
                label="Sandi"
                htmlFor="password"
                error={
                    errors.password && (
                        <>
                            {errors.password?.type === 'required' && (
                                <span>This field is required!</span>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <span>Password must be at lest 6 characters!</span>
                            )}
                            {errors.password?.type === 'maxLength' && (
                                <span>Password must not be longer than 20 characters!</span>
                            )}
                        </>
                    )
                }
            >
                <Controller
                    as={<Input.Password />}
                    defaultValue=""
                    control={control}
                    id="password"
                    name="password"
                    rules={{ required: true, minLength: 6, maxLength: 20 }}
                    disabled={loading}
                />
            </FormControl>
            <FormControl
                label="Ulangi Sandi"
                htmlFor="confirmPassword"
                error={
                    confirmPassword &&
                    password !== confirmPassword && (
                        <span>Your password is not same!</span>
                    )
                }
            >
                <Controller
                    as={<Input.Password />}
                    defaultValue=""
                    control={control}
                    id="confirmPassword"
                    name="confirmPassword"
                    disabled={loading}
                />
            </FormControl>
            <Button
                className="signin-btn"
                type="primary"
                htmlType="submit"
                size="large"
                style={{ width: '100%' }}
                disabled={loading}
            >
                {loading ? (<Spin size="default" />) : "Daftar Sekarang"}
            </Button>
        </form>
    );
};
