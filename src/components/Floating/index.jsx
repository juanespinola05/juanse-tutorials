import { Div } from './floatingStyles'

const Floating = ({ color = 'white', children, ...props }) => {
  return (
    <Div color={color} {...props}>
      {children}
    </Div>
  )
}

export default Floating
