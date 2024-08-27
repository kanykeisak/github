import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classes from "./RegisterformPage.module.scss";

const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

const schema = yup.object().shape({
    name: yup.string().required('Обязательное поле').min(3, 'Необходимо 3'),
    email: yup.string().required('Обязательное поле').email('').matches(gmailRegex,'@gmail.com'),
    password: yup.string().required('Обязательное поле').min(6, 'Необходимо 8'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Повторите пароль'),
});

const RegisterformPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const submit = (data) => {
        console.log(data);
    };

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit(submit)} className={classes.form}>
                <div className={classes.register}>
                    <p className={classes.title}>Register with</p>
                </div>
                <div className={classes.formstyle}>
                    <div className={classes.style}>
                        <p>Name</p>
                        <input
                            placeholder="Your full name"
                            type="text"
                            {
                                ...register('name')
                            }
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className={classes.style}>
                        <p>Email</p>
                        <input
                            placeholder="Your email"
                            type="text"
                            {
                                ...register('email')
                            }
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className={classes.style}>
                        <p>Password</p>
                        <input
                            placeholder="Your password"
                            type="password"
                            {
                                ...register('password')
                            }
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <div className={classes.style}>
                        <p>Re-enter password</p>
                        <input
                            placeholder="Your password"
                            type="password"
                            {
                                ...register('confirmPassword')
                            }
                        />
                        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                    </div>
                </div>
                <div>
                    <button className={classes.btn} type="submit">Continue</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterformPage;
