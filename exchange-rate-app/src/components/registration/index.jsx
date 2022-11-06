import React, { useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import Card from '../card'


const Registration = (props) => {
    const [formData, setFormData] = useState({});
    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
        },
        validate: (data) => {
            let errors = {};

            if (!data.firstName) {
                errors.firstName = 'Name is required.';
            }

            if (!data.email) {
                errors.email = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address. E.g. example@email.com';
            }
            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            props.toggleBarChart(true);
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <Card className="m-auto md:w-8 sm:w-12 mt-5" title="Registration" subTitle="Enter your Details!">
            <div className="flex justify-content-center flex-column">
                <div className="card">
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field mt-2">
                            <span className="p-float-label">
                                <InputText id="firstName" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('firstName') })} />
                                <label htmlFor="firstName" className={classNames({ 'p-error': isFormFieldValid('firstName') })}>First Name</label>
                            </span>
                            {getFormErrorMessage('firstName')}
                        </div>
                        <div className="field mt-5">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
                </div>
            </div>
        </Card>
    )

}

export default Registration