import React, { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

export default function OTPModal({
    isOpen,
    onClose = () => { },
    onVerify = () => { },
    onResend = () => { },
    email = "",
    phone = "",
}) {
    const [otp, setOtp] = useState(Array(6).fill(''));
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const inputRefs = useRef([]);

    const contact = email || phone;

    // Timer
    useEffect(() => {
        if (!isOpen) return;

        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, isOpen]);

    // Reset when modal opens
    useEffect(() => {
        if (isOpen) {
            setOtp(Array(6).fill(''));
            setTimeLeft(60);
            setLoading(false);
            setResendLoading(false);
            // Focus first input
            setTimeout(() => {
                inputRefs.current[0]?.focus();
            }, 100);
        }
    }, [isOpen]);

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').slice(0, 6);
        if (!/^\d+$/.test(pasted)) return;

        const newOtp = Array(6).fill('');
        pasted.split('').forEach((char, i) => {
            newOtp[i] = char;
        });
        setOtp(newOtp);
    };

    const handleVerify = async () => {
        const otpString = otp.join('');
        if (otpString.length !== 6) return;

        setLoading(true);
        try {
            await onVerify(email, otpString);
        } catch (error) {
            toast.error(error?.response?.data?.errors?.detail || "Verification failed");
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        if (timeLeft > 0) return;

        setResendLoading(true);
        try {
            await onResend(email);
            setTimeLeft(60);
            setOtp(Array(6).fill(''));
            toast.success("OTP resent successfully");
        } catch (error) {
            toast.error(error?.response?.data?.errors?.detail || "Failed to resend OTP");
        } finally {
            setResendLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1A1A1A] w-full max-w-md rounded-2xl overflow-hidden border border-gray-800">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-800">
                    <div>
                        <h2 className="text-2xl font-semibold text-white">Enter OTP</h2>
                        <p className="text-gray-400 text-sm mt-1">
                            We sent a verification code to
                        </p>
                        <p className="text-white text-sm font-medium">{contact}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white text-xl transition-colors"
                    >
                        ✕
                    </button>
                </div>

                {/* OTP Inputs */}
                <div className="p-8">
                    <div className="flex gap-3 justify-center mb-8">
                        {Array(6).fill(0).map((_, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={otp[index]}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={index === 0 ? handlePaste : undefined}
                                className="w-12 h-14 text-center text-3xl font-semibold bg-[#252525] border border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-all"
                            />
                        ))}
                    </div>

                    {/* Timer / Resend */}
                    <div className="text-center mb-6">
                        {timeLeft > 0 ? (
                            <p className="text-gray-400 text-sm">
                                Resend code in <span className="text-orange-500 font-medium">{timeLeft}s</span>
                            </p>
                        ) : (
                            <button
                                onClick={handleResend}
                                disabled={resendLoading}
                                className="text-orange-500 hover:text-orange-400 font-medium transition-colors disabled:opacity-50"
                            >
                                {resendLoading ? "Sending..." : "Resend OTP"}
                            </button>
                        )}
                    </div>

                    {/* Verify Button */}
                    <button
                        onClick={handleVerify}
                        disabled={otp.join('').length !== 6 || loading}
                        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all text-lg"
                    >
                        {loading ? "Verifying..." : "Verify OTP"}
                    </button>

                    <p className="text-center text-xs text-gray-500 mt-4">
                        Didn't receive the code? Check your spam folder
                    </p>
                </div>
            </div>
        </div>
    );
}