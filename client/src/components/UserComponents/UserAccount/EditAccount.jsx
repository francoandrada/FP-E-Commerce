import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../Register/Register.module.css';
import ButtonRed from '../../StyledComponents/ButtonRed';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Error from '../../StyledComponents/ErrorMessages';
import Div from '../../StyledComponents/Validation';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md'


function EditAccount({setOption}) {

        const history = useHistory()
    
        const userInfo = useSelector((state) => state.user.userData);
        const userToEdit = useSelector((state) => state.admin.userToEdit);
        const dispatch = useDispatch();
    

    
        const [user, setUser] = useState({
            email: '',
            password: '',
            name: '',
            surname: '',
            phone: '',
            address: '',
            addressNumber: '',
            postalCode: '',
            admin:''
        });
    
        useEffect(()=>{
            if(userToEdit){
                setUser({
                    email: userToEdit.email,
                    password: userToEdit.password,
                    name: userToEdit.name,
                    surname: userToEdit.surname,
                    phone: userToEdit.phone,
                    address: userToEdit.address,
                    addressNumber: userToEdit.addressNumber,
                    postalCode: userToEdit.postalCode,
                    admin:userToEdit.admin
                })
            }
        },[userToEdit])
    
    
    
    
        const [hola, setHola] = useState([]);
        const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
                name: '',
                surname: '',
                phone: '',
                address: '',
                addressNumber: '',
                postalCode: '',
                admin:''
            },
            validationSchema: Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Enter an email'),
                password: Yup.string()
                    .required(`You can't change the user password, It's private info`)
                    .matches(
                        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
                        'Must contain 6 Characters, one uppercase, one lowercase and one number'
                    ),
                name: Yup.string().required('Enter a name'),
                surname: Yup.string().required('Enter a surname'),
                phone: Yup.number().required('Enter a valid phone number'),
                address: Yup.string().required('Enter an address'),
                addressNumber: Yup.string().required('Enter an address number'),
                postalCode: Yup.number().required('Enter a postal code'),
            }),
        });
    
        const handleChange =(event)=>{
            console.log(event)
            if(event.target.name!=='admin'){
                setUser({
                    ...user,
                    [event.target.name]: event.target.value
                })
            } else {
                setUser({
                    ...user,
                    [event.target.name]: event.target.checked
                })
            }
        }
    
        const handleSubmit = async (e )=>{
                console.log(user);
                e.preventDefault()
                try {
                    await axios.put('http://localhost:3001/admin/user/edit',user)
                    .then(()=>{
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'The user was succesfully edited',
                            showConfirmButton: false,
                            timer: 2000,
                        });
                    }
                    )
                    // .then(()=>history.pushState('/myaccount'))
                    .then(setOption({target:{id: 'account'}}))
    
                } catch (error) {
                    console.log(error.response);
                    setHola(error.response);
                }
        };
    
        return (
            <div className={styles.registerFormContainer}>
    
                <div id={styles.regForm}>
                    <form onSubmit={handleSubmit}>
                        <div className='form-row' id={styles.row}>
                            <div className='form-group col-md-5' id={styles.input}>
                                <label>Email</label>
    
                                <input
                                    type='email'
                                    class='form-control'
                                    id='email'
                                    value={user.email}
                                    name='email'
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <Div>{formik.errors.email}</Div>
                                ) : null}
                            </div>
    
                            <div className='form-group col-md-4' id={styles.input}>
                                <label>Password</label>
    
                                <input
                                    type='password'
                                    name='password'
                                    value={user.password}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className='form-control'
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <Div>{formik.errors.password}</Div>
                                ) : null}
                            </div>
                        </div>
                        <div className='form-row' id={styles.row}>
                            <div className='form-group col-md-4' id={styles.input}>
                                <label>Name </label>
                                <input
                                    type='text'
                                    name='name'
                                    value={user.name}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className='form-control'
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <Div>{formik.errors.name}</Div>
                                ) : null}
                            </div>
                            <div className='form-group col-md-4' id={styles.input}>
                                <label>Surname</label>
                                <input
                                    type='text'
                                    name='surname'
                                    value={user.surname}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className='form-control'
                                />
                                {formik.touched.surname && formik.errors.surname ? (
                                    <Div>{formik.errors.surname}</Div>
                                ) : null}
                            </div>
                            <div className='form-group col-md-2 ' id={styles.input}>
                                <label>Phone</label>
                                <input
                                    type='tel'
                                    name='phone'
                                    value={user.phone}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className='form-control'
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <Div>{formik.errors.phone}</Div>
                                ) : null}
                            </div>
                        </div>
                        <div>
                            <div className='form-row' id={styles.row}>
                                <div className='form-group col-md-4 ' id={styles.input}>
                                    <label>Address Street</label>
                                    <input
                                        type='text'
                                        name='address'
                                        value={user.address}
                                        onChange={handleChange}
                                        onBlur={formik.handleBlur}
                                        className='form-control'
                                    />
                                    {formik.touched.address && formik.errors.address ? (
                                        <Div>{formik.errors.address}</Div>
                                    ) : null}
                                </div>
                                <div className='form-group col-md-3' id={styles.input}>
                                    <label>Address Number</label>
                                    <input
                                        type='number'
                                        name='addressNumber'
                                        value={user.addressNumber}
                                        onChange={handleChange}
                                        onBlur={formik.handleBlur}
                                        className='form-control'
                                    />
                                    {formik.touched.addressNumber && formik.errors.addressNumber ? (
                                        <Div>{formik.errors.addressNumber}</Div>
                                    ) : null}
                                </div>
                                <div className='form-group col-md-3 ' id={styles.input}>
                                    <label>Postal Code</label>
                                    <input
                                        type='number'
                                        name='postalCode'
                                        value={user.postalCode}
                                        onChange={handleChange}
                                        onBlur={formik.handleBlur}
                                        className='form-control'
                                    />
                                    {formik.touched.postalCode && formik.errors.postalCode ? (
                                        <Div>{formik.errors.postalCode}</Div>
                                    ) : null}
                                </div>
    
                            </div>
                            <div className={styles.registerButtonRow}>
                                <ButtonRed type='submit'>Confirm</ButtonRed>
                            </div>
                        </div>
                    </form>
                    <div />
                </div>
            </div>
        );
    }
    
export default EditAccount;
