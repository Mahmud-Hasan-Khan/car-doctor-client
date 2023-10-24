import { Link } from "react-router-dom";
import LoginLogo from "../../assets/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((userCredential) => {
                const loggedInUser = userCredential.user;
                console.log(loggedInUser);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center lg:text-left w-1/2 lg:mr-12">
                    <img src={LoginLogo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100 border shadow">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin}>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white bg-[#FF3811] hover:bg-[#ec4e22] " type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center my-4">New to Car Doctors <Link to='/signup'> <span className="text-[#FF3811] hover:font-medium" >Sign Up</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;