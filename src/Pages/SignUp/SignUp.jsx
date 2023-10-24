import { Link, useNavigate } from "react-router-dom";
import SignUpLogo from "../../assets/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    icon: 'success',
                    title: 'Your registration has been successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/login')
            })
            .then(error => console.log(error))

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center lg:text-left w-1/2 lg:mr-12">
                    <img src={SignUpLogo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100 border shadow">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white bg-[#FF3811] hover:bg-[#ec4e22] " type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-center my-4">New to Car Doctors <Link to='/login'> <span className="text-[#FF3811] hover:font-medium" >Login</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;