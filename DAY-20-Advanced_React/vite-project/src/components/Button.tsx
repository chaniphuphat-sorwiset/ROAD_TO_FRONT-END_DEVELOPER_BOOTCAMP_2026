interface ButtonProps {
  title: string
  color: string
  updateCount: () => void
}
function Button({ title, color, updateCount }: ButtonProps) {
  return (
    <button
      onClick={updateCount}
      style={{
        backgroundColor: color,
      }}
    >
      {title}
    </button>
  )
}

export default Button
