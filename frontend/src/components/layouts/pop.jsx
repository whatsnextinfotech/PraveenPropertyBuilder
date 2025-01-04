import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, login } from '../../actions/userActions';
import MetaData from '../layouts/MetaData';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ImCancelCircle } from "react-icons/im";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { loading, error, isAuthenticated } = useSelector(state => state.authState);
    const redirect = location.search ? '/' + location.search.split('=')[1] : '/';

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    useEffect(() => {
        let timer;
        if (!isAuthenticated) {
            timer = setTimeout(() => {
                setShowModal(true);
            }, 5000); // Show modal after 5 seconds
        } else {
            setShowModal(false); // Ensure modal is hidden if authenticated
        }

        if (isAuthenticated) {
            navigate(redirect);
        }

        if (error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: () => { dispatch(clearAuthError()) }
            });
        }

        return () => clearTimeout(timer);
    }, [error, isAuthenticated, dispatch, navigate]);

    return (
        <Fragment>
            <MetaData title={`Login`} />

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <div className="custom-close-button" onClick={() => setShowModal(false)}>
                        <ImCancelCircle />
                        </div>
                        
                        <div className="modal-header">
                            <h3>Login</h3>
                        </div>

                        <div className="modal-body">
                            <form onSubmit={submitHandler} className="form-container">
                                <div className="form-group">
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        placeholder='enter email id'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mt-0">
                                    <label htmlFor="password_field">Password</label>
                                    <input
                                        type="password"
                                        id="password_field"
                                        className="form-control"
                                        placeholder='enter password'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-submit"
                                    disabled={loading}
                                >
                                    LOGIN
                                </button>

                                <Link to="/register" className="register-link">New User?</Link>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <style>
                {`/* Custom Styles */

/* Modal overlay */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

/* Modal container */
.modal-container {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    position: relative;
}

/* Custom close button */
.custom-close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
    color: #333;
    cursor: pointer;
}

.custom-close-button:hover {
    color: #ff0000;
}

/* Header */
.modal-header {
    text-align: center;
    margin-bottom: 0px;
}

.modal-header h3 {
    font-size: 24px;
    margin: 0;
}

/* Form container */
.form-container {
    display: flex;
    flex-direction: column;
}

/* Input fields */
.form-group {
    margin-bottom: -55px;
}

.form-group label {
    font-weight: bold;
}

.form-control {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.mt-3 {
    margin-top: 10px;
}

/* Submit button */
.btn-submit {
    padding: 10px;
    background-color:rgb(255, 98, 0);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight:600;
    width: 100%;
    margin-top:20px
}
.btn-submit:hover{
background:rgb(3, 137, 117);
}
.btn-submit:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}


/* Register link */
.register-link {
    margin-top: 15px;
    text-align: center;
    display: block;
    font-weight:500;
    text-decoration: none;
}

.register-link:hover {
color:green;
    text-decoration: underline;
}
`}
            </style>
        </Fragment>
    );
}
