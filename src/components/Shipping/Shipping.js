import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => { console.log(data) };

    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span className="error">This field is required</span>}
                <input defaultValue="" {...register("address")} />
                <input defaultValue="" {...register("phone")} />
                <input defaultValue="" {...register("city")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;