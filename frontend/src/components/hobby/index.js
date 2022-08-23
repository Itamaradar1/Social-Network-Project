import './index.scss'

const Hobby = (props) => {

  const handleClick = () => {
    props.deleteHobby(props.label);
  }

  return (
    <div className='hobby'>
      <p className='hobby-label'>{props.label}</p>
      <div className='x' onClick={handleClick} >
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#AAAAAA"
          strokeWidth="15"
          width="10"
          height="10"
          fill="grey">
          <line x1="0" y1="100" x2="100" y2="0" />
          <line x1="0" y1="0" x2="100" y2="100" />
          <line></line>
        </svg>
      </div>
    </div>
  );
}

export default Hobby;