import React from 'react';
import { ExternalLink } from 'lucide-react';


export default function Slide({
    title,
    subtitle,
    image,
    link,
    background = "from-violet-600 via-purple-600 to-indigo-600",
    icon,
    showImage = true,
}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full h-[200px] rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
            <div className={`relative h-[380px] bg-gradient-to-br ${background} flex items-center justify-center p-8 overflow-hidden`}>

                {/* Background Decorative Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent)]" />

                {/* Main Image / Visual */}
                {showImage && image && (
                    <div className=" inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                <div className=" z-10 text-center max-w-md">
                    {/* Icon / Logo */}
                    {icon && (
                        <div className="mb-6 flex justify-center">
                            {icon}
                        </div>
                    )}

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-md">
                        {title}
                    </h2>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-xl text-white/90 font-medium">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/80 text-sm font-medium">
                    Explore Now
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </a>
    );
}