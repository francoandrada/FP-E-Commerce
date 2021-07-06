import * as Yup from 'yup';
import { useFormik } from 'formik'
import style from './LogIn.module.css'

const LogIn = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(formik.values.email)
        },
    });

    return (
        <>
            <div className={style.loginContainer}>
                <form className={style.formContainer} onSubmit={formik.handleSubmit}>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                    <label htmlFor='password'>Password Address</label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                    <button type='submit'>Submit</button>
                       
                </form>
            </div>
        </>
    )
}

export default LogIn;