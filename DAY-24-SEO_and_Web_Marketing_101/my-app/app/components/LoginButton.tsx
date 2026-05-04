"use client"

import Button from "@mui/material/Button"

import ResponsiveAppBar from "./ResponsiveAppBar"

function LoginButton() {
  // const [isLogin, setIsLogin] = useState()
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  )
}

export default LoginButton
