import React, { useState } from 'react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { KeyIcon, User2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';

function Signup() {

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center overflow-hidden">
            <div className="max-w-md w-full px-6 py-12">

                <div className="bg-zinc-900/70 border border-zinc-700 rounded-3xl p-8 shadow-2xl">
                    <h2 className="text-3xl font-semibold text-center mb-2">Create Account</h2>


                    <form className="space-y-6">
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            leftIcon={User2Icon}
                            className='py-3'
                        />

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

                        {/* Terms Checkbox */}
                        <label className="flex items-start gap-3 text-sm text-zinc-400 cursor-pointer">
                            <input
                                type="checkbox"
                                name="agreeTerms"
                                className="mt-1 w-4 h-4 accent-emerald-500"
                                required
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