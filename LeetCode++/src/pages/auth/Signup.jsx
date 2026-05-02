import React, { useState } from 'react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { KeyIcon, User2Icon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Signup() {
    let navigate = useNavigate()
    let [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        isAccepted: false
    })

    let handleSubmit = (event) => {
        event.preventDefault();

        if (data.username.trim() == '') {
            return toast.error("Username is Required")
        } else if (data.email.trim() == '') {
            return toast.error("Email is Required")
        } else if (data.password.trim() == '') {
            return toast.error("Password is Required")
        } else if (data.isAccepted == false) {
            return toast.error("Please Accept Terms of Conditions")
        }
        console.log("submitted", data) // send to backend
        toast.success("Account Created Successfully")


        setData({
            username: "",
            email: "",
            password: "",
            isAccepted: false
        })
        navigate('/sign-in')
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center overflow-hidden">
            <div className="max-w-md w-full px-6 py-12">

                <div className="bg-zinc-900/70 border border-zinc-700 rounded-3xl p-8 shadow-2xl">
                    <h2 className="text-3xl font-semibold text-center mb-2">Create Account</h2>


                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            leftIcon={User2Icon}
                            className='py-3'
                            onChange={(e) => setData({ ...data, username: e.target.value })}
                            value={data.username}
                        />

                        <Input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            leftIcon={User2Icon}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            className='py-3'
                            value={data.email}

                        />

                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            leftIcon={KeyIcon}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            className='py-3'
                            value={data.password}
                        />

                        {/* Terms Checkbox */}
                        <label className="flex items-start gap-3 text-sm text-zinc-400 cursor-pointer">
                            <input
                                type="checkbox"
                                name="agreeTerms"
                                className="mt-1 w-4 h-4 accent-emerald-500"
                                onChange={(e) => setData({ ...data, isAccepted: !data.isAccepted })}
                                checked={data.isAccepted}
                            />
                            <span>
                                I agree to the{' '}
                                <a href="/terms" className="text-emerald-400 hover:text-emerald-300">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="/privacy" className="text-emerald-400 hover:text-emerald-300">
                                    Privacy Policy
                                </a>
                            </span>
                        </label>

                        <Button
                            variant="gradient"
                            size="lg"
                            fullWidth
                            type="submit"
                        >
                            Create Account
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-8">
                        <div className="h-px bg-zinc-700 flex-1"></div>
                        <span className="text-zinc-500 text-sm">OR</span>
                        <div className="h-px bg-zinc-700 flex-1"></div>
                    </div>


                    <p className="text-center text-zinc-400 mt-8">
                        Already have an account?{' '}
                        <Link to="/sign-in" className="text-emerald-400 hover:text-emerald-300 font-medium">
                            Sign in
                        </Link>
                    </p>
                </div>


            </div>
        </div>
    );
}

export default Signup;