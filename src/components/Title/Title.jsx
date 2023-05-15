import PropTypes from "prop-types";

function Title( { title } ) {
  return (
      title === 'Phonebook' ? <h1>{title}</h1> : <h2>{ title }</h2>
  )
}

export default Title;


Title.propTypes = {
  title:PropTypes.string
}