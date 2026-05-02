interface ButtonProps {
  title: string
  color: string
}
function Button({ title, color }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: color,
      }}
    >
      {title}
    </button>
  )
}

export default Button
