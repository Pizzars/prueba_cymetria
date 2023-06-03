interface Params {
  text: string
  onClick: () => void
  className?: string
}

const Button = ({ text, onClick, className = '' }: Params) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-white hover:bg-secondary  font-bold text-lg py-2 px-4 rounded-lg ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
