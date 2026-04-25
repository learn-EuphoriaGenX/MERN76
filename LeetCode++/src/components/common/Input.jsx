import { Search } from 'lucide-react'; // Example icon import

export default function Input({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  error,
  label,
  className = '',
  containerClassName = '',
  ...props
}) {
  return (
    <div className={`w-full ${containerClassName}`}>
      {/* Label */}
      {label && (
        <label className="block text-sm text-gray-400 mb-1.5 font-medium">
          {label}
        </label>
      )}

      {/* Input Container */}
      <div className="relative group">
        {/* Left Icon */}
        {LeftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#f9b13f] transition-colors pointer-events-none">
            <LeftIcon size={18} />
          </div>
        )}

        {/* Actual Input */}
        <input
          className={`
            w-full bg-[#1a1c23] border border-gray-700 rounded-lg 
            py-2 text-sm text-gray-200 placeholder-gray-500
            focus:outline-none focus:border-[#f9b13f] transition-colors
            ${LeftIcon ? 'pl-11' : 'pl-4'}
            ${RightIcon ? 'pr-11' : 'pr-4'}
            ${error ? 'border-red-500 focus:border-red-500' : ''}
            ${className}
          `}
          {...props}
        />

        {/* Right Icon */}
        {RightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <RightIcon size={18} />
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-xs mt-1.5">{error}</p>}
    </div>
  );
}