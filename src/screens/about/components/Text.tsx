const Text = ({ text, textPosition = 0 }: { text: string; textPosition?: number }) => {
  return (
    <>
      {text.split('\n').map((tx, i) => {
        return (
          <span
            key={`tx-${i}`}
            className={`${
              textPosition === 0 ? 'text-center' : textPosition === 1 ? 'text-left' : 'text-right'
            }`}
          >
            {tx}
            <br />
          </span>
        )
      })}
    </>
  )
}

export default Text
