import React from 'react'; // Assuming your custom Input component
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { User2Icon, KeyIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center overflow-hidden">
            <div className="max-w-md w-full px-6 py-12">

                <div className="bg-zinc-900/70 border border-zinc-700 rounded-3xl p-8 shadow-2xl">
                    <h2 className="text-3xl font-semibold text-center mb-2">Welcome Back</h2>
                    <p className="text-zinc-400 text-center mb-8">
                        Sign in to continue coding
                    </p>

                    <form className="space-y-6">
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            leftIcon={User2Icon}
                            className='py-3'

                        />

                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            leftIcon={KeyIcon}
                            className='py-3'
                        />

                        <div className="flex items-center justify-between text-sm">
                            <Link to="/forgot-password" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                                Forgot password?
                            </Link>
                        </div>

                        <Button
                            variant="gradient"
                            size="lg"
                            fullWidth
                            type="submit"
                        >
                            Sign In
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-8">
                        <div className="h-px bg-zinc-700 flex-1"></div>
                        <span className="text-zinc-500 text-sm">OR</span>
                        <div className="h-px bg-zinc-700 flex-1"></div>
                    </div>



                    <p className="text-center text-zinc-400 mt-8">
                        Don't have an account?{' '}
                        <Link to="/sign-up" className="text-emerald-400 hover:text-emerald-300 font-medium">
                            Sign up free
                        </Link>
                    </p>
                </div>


            </div>
        </div>
    );
}

export default Signin;