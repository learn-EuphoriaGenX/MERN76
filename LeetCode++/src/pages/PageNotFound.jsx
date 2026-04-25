import React from 'react';
import Button from '../components/common/Button';
import { useNavigate, useParams } from 'react-router-dom';

function PageNotFound() {

    let params = useParams();
    let route = params['*'];

    let navigate = useNavigate()

    let goHome = () => {
        navigate("/")
    }

    let goBack = () => {
        navigate(-1)
    }


    return (
        <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center overflow-hidden">
            <div className="max-w-2xl mx-auto text-center px-6">


                {/* 404 Glitch Effect */}
                <div className="relative mb-8">
                    <h2 className="text-[16rem] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b  from-amber-400 to-yellow-500">
                        404
                    </h2>

                </div>

                {/* Message */}
                <div className="space-y-4 mb-12">
                    <p className="text-4xl font-medium tracking-tight">
                        Oops! Function not found<span className="text-emerald-400">.</span>
                    </p>
                    <p className="text-zinc-400 text-xl max-w-md mx-auto">
                        The page you're looking for has either been deleted or never existed.
                    </p>
                    <p className="text-emerald-400 text-lg">return to base();</p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant='gradient' size='lg' onClick={goHome}>
                        Back to Dashboard
                    </Button>
                    <Button variant='outline' size='lg' onClick={goBack}>
                        Go Back
                    </Button>
                </div>

                {/* Console Box */}
                <div className="mt-16 max-w-md mx-auto bg-zinc-900/70 border border-zinc-700 rounded-3xl p-6">
                    <div className="flex items-center gap-3 mb-4 text-emerald-400">
                        <i className="fa-solid fa-terminal"></i>
                        <p className="text-sm font-medium">CONSOLE OUTPUT</p>
                    </div>
                    <div className="text-left text-sm text-zinc-400 space-y-1">
                        <p>
                            <span className="text-rose-400">Error:</span> route_not_found("/{route}")
                        </p>
                        <p>
                            <span className="text-emerald-400">Suggestion:</span> check your URL or search for a problem
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default PageNotFound;