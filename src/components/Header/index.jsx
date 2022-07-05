import Floating from '../Floating'

const Header = ({ children }) => {
  return (
    <div className='container'>
      <Floating color='pink' style={{ marginTop: '40px', display: 'flex', alignItems: 'center' }}>
        <h1>{children}</h1>
      </Floating>
    </div>
  )
}

export default Header
