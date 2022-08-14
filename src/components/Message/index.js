// Write your code here

const Message = props => {
  const {isLoggedIn} = props
  const headingtext = isLoggedIn ? 'Welcome User' : 'Please Login'

  return <h1 className="heading">{headingtext}</h1>
}

export default Message
