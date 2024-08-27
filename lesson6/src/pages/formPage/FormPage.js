import React from 'react';
import {useForm} from "react-hook-form";
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import classes from "./FormPage.module.scss";

const regex = /^\d+$/;

const schema = Yup.object().shape({
    name: Yup.string().required('Обязательное поле').min(2, 'Необходимо 2'),
    age: Yup.string().required('Обязательное поле').matches(regex, 'Только цифры').min(1, 'Необходимо 1')
})

const FormPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        clearErrors,
        setValue,
        reset,
    } =useForm({
        defaultValues:{
            // name: 'Kanykei'
        },
        resolver: yupResolver(schema)
    })

    const name = watch('name')

    const submit =(data) =>{
        console.log(data)
    }
    const error =(data) =>{
        console.log(data)
    }

    return (
        <div>
            <form className={classes.form} onSubmit={handleSubmit(submit, error)}>
                <h1>{name}</h1>
                <input
                    className={classes.input}
                    type="text"
                    {
                    ...register('name')
                    }
                    aria-invalid={errors.name ? true : false}
                />
                {
                    errors?.name?.message && <p>{errors.name.message}</p>
                }
                <input
                    className={classes.input}
                    type="text"
                    {
                        ...register('age')
                    }
                    aria-invalid={errors.age ? true : false}
                />
                {
                    errors?.age?.message && <p>{errors.age.message}</p>
                }
                <button>Отправить</button>
                <button type='button' onClick={()=>clearErrors()}>Очистить</button>
                <button type='button' onClick={()=>setValue('name', 'Kanykei')}>Отправить имя</button>
                <button type='button' onClick={()=>setValue('age', '20')}>Отправить возраст</button>
                <button type='button' onClick={()=>reset()}>Сброс</button>
            </form>
        </div>
    );
};

export default FormPage;