interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  size?: 'default' | 'lg'
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'font-bold rounded-lg transition-colors duration-200 ease-in-out flex items-center justify-center'
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800',
    outline: 'bg-white text-black border border-black hover:bg-gray-100'
  }
  const sizeStyles = {
    default: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}