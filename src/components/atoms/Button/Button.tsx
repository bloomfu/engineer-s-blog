import PropTypes from 'prop-types'

interface ButtonProps {
  title: string
}

const Button = ({ title }: ButtonProps) => {
  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      style={{ marginLeft: '10px' }}
    >
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
}

export default Button
