interface FooterProps {
  counter: number
}
function Footer({ counter }: FooterProps) {
  return <div>{counter}</div>
}

export default Footer
