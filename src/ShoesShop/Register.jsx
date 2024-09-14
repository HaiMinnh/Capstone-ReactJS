import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { handleChangeInputAction } from '../redux/reducer/userReducer';
import axios from 'axios';

const Register = () => {
    const { userRegister } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Sử dụng useNavigate

    const handleChangeInput = (e) => {
        let { id, value } = e.target;
        const action = handleChangeInputAction({ id, value });
        dispatch(action);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://shop.cyberlearn.vn/api/Users/signup', userRegister);
            console.log('API Response:', response.data);
            alert('Đăng ký thành công');
            navigate('/login');
        } catch (error) {
            console.error('API Error:', error);
            // Hiển thị thông báo lỗi chi tiết hơn
            if (error.response && error.response.data) {
                alert(`Đăng ký thất bại: ${error.response.data.message}`);
            } else {
                alert('Đăng ký thất bại: Đã xảy ra lỗi, vui lòng thử lại.');
            }
        }
    };

    return (
        <div className='register container pb-5 py-5 pb-3' style={{ background: '#fffcfc' }}>
            <div className="form-group ps-5 ms-5">
                <h1 className=''>Register</h1>
                <hr />
            </div>
            <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
                <div className="form d-flex justify-content-between">
                    <div className="form1">
                        <div className="form-group" >
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                placeholder='email'
                                className='form-control'
                                value={userRegister.email}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="form-group mt-2" >
                            <label htmlFor="password">Password</label>
                            <input
                                id='password'
                                type="password"
                                name='password'
                                placeholder='password'
                                className='form-control'
                                value={userRegister.password}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="form-group mt-2" >
                            <label htmlFor="passwordComfirm">Confirm Password</label>
                            <input
                                id='passwordComfirm'
                                type="password"
                                name='comfirmPassword'
                                placeholder='password confirm'
                                className='form-control'
                                value={userRegister.passwordComfirm}
                                onChange={handleChangeInput}
                            />
                        </div>
                    </div>
                    <div className="form2">
                        <div className="form-group" >
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                placeholder='name'
                                className='form-control'
                                value={userRegister.name}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="form-group mt-2" >
                            <label htmlFor="phone">Phone</label>
                            <input
                                id='phone'
                                type="text"
                                name='phone'
                                placeholder='phone'
                                className='form-control'
                                value={userRegister.phone}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <div className="gender">
                                <label className="title" htmlFor="gender">Gender</label>
                                <input
                                    className="form-check-input mx-4"
                                    type="radio"
                                    name="gender"
                                    value="true"
                                    checked={userRegister.gender === true}
                                    onChange={handleChangeInput}
                                />
                                <input
                                    className="form-check-input mx-2"
                                    type="radio"
                                    name="gender"
                                    value="false"
                                    checked={userRegister.gender === false}
                                    onChange={handleChangeInput}
                                />
                                <br />
                                <label className="title ms-5 ps-3" htmlFor="gender">Male</label>
                                <label className="title ms-2" htmlFor="gender">Female</label>
                            </div>
                            <button className='btn rounded-5 mt-2 text-white px-4 py-1.5' type='submit' style={{ background: '#6200ee', }}>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register;
