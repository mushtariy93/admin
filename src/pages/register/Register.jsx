import { request } from '@/api';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '@/redux/slices/token-slice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData);

    console.log(user);

    request
      .post("/auth/signup-admin", user)
      .then((res) => {
        console.log(res);
        dispatch(signIn(res.data.access_token));
        navigate("/admin");
      });
  };

  return (
    <div className="flex justify-end items-center min-h-screen bg-no-repeat bg-cover bg-center bg-gray-100 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/049/855/274/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg')]">
      <div className="w-full max-w-lg  p-8  m-20 rounded-lg shadow-lg flex  backdrop-sepia-0  bg-white/30   ">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Register
          </h2>
          <form onSubmit={handleSignUp}>
            <div className=" gap-7 mb-4">
              <label htmlFor="name" className="block text-gray-900">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-900">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-900">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirm_password" className="block text-gray-900">
                Confirm Password
              </label>
              <input
                id="confirm_password"
                name="confirm_password"
                type="password"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-900 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>

    
       <div className="relative lg:w-1/2 p-8 flex items-center justify-center">
  <img
    src="https://img.freepik.com/premium-photo/young-woman-yellow-garden-ware-yellow-dress_862994-16027.jpg?w=826"
    alt="Register"
    className="absolute inset-0 w-full h-full object-cover rounded-md"
  />
  
 
 
</div>
      </div>
    </div>
  );
};

export default Register;
