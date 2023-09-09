interface Params {
  text: string
  onClick: () => void
  className?: string
  disabled?: boolean
}

const Button = ({ text, onClick, className = '', disabled = false }: Params) => {
  return (
    <button
      onClick={disabled ? () => null : onClick}
      className={`bg-primary text-white hover:bg-secondary ${
        disabled ? 'bg-opacity-50' : ''
      } font-bold text-lg py-2 px-4 rounded-lg ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
