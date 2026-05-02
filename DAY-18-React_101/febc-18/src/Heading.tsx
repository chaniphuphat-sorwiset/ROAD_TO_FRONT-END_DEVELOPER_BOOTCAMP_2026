import Button from "./Button"

interface HeadingProps {
  title: string
  color: string
}

function Heading({ title, color }: HeadingProps) {
  return (
    <div>
      {title} {color}
      <Button title="Register" color="grey"></Button>
      <Button title="Login" color="cyan"></Button>
    </div>
  )
}

export default Heading

// ให้สร้าง Componenet ชื่อ Button ให้ไปแสดงผลใน App มี Props 2 ตัว คือ title และ color
