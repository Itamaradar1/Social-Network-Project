import userPhoto from '../../assets/images/users/jennifer.png';
import './sendedRequest.scss';

const SendedRequest = () => {
  return (
    <div className='sended-request' >
      <div className='left'>
        <img className='userPhoto' src={userPhoto}></img>
        <div className='signature'>
          <p className='author'>{'Leticia Suarez'}</p>
          <p className='time'>{'Thomas Castro'}</p>
        </div>
      </div>
      <div className='right'>
        <div className='x'>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#AAAAAA"
            strokeWidth="5"
            width="22"
            height="22"
            fill='#F2F2F2'
          >
            <circle cx="50" cy="50" r="40" strokeWidth="8" />
            <line x1="50" y1="25" x2="50" y2="50" />
            <line x1="50" y1="50" x2="70" y2="70" />
            <line></line>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SendedRequest;