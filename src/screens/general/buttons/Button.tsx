interface Params {
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const Button = ({
  text,
  onClick = () => {},
  className = '',
  disabled = false,
  type = 'button'
}: Params) => {
  return (
    <button
      // onClick={disabled ? () => {} : onClick}
      className={`bg-primary text-white hover:bg-secondary ${
        disabled ? 'bg-opacity-50' : ''
      } font-bold text-lg py-2 px-4 rounded-lg ${className}`}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button
