interface Params {
  type?: string
  maxLength?: number
  minLength?: number
  required?: boolean
  placeholder?: string
  name?: string
  label: string
  onChange?: (e: any) => void
  value?: string
}

const Input = ({
  type = 'text',
  maxLength,
  minLength,
  required = true,
  placeholder,
  name,
  label,
  onChange,
  value
}: Params) => {
  return (
    <label className=''>
      <div className='mx-4 mb-2 text-primary font-bold'>{label}</div>
      <input
        className='block px-4 py-2 rounded-lg border border-primary text-secondary bg-white'
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        required={required}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </label>
  )
}

export default Input
