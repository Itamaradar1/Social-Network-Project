import userPhoto from '../../assets/images/users/jennifer.png';

import './receivedRequest.scss';

const ReceivedRequest = () => {
  return (
    <div className='received-request' >
      <div className='left'>
        <img className='userPhoto' src={userPhoto}></img>
        <div className='signature'>
          <p className='author'>{'Leticia Suarez'}</p>
          <p className='time'>{'Thomas Castro'}</p>
        </div>
      </div>
      <div className='right'>
        <div className='tick'>
          <svg
            fill='white'
            id="Layer_1"
            enableBackground="new 0 0 2000 2000"
            height="20" viewBox="0 0 2000 2000" width="20"
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <g>
                <path
                  d="m698 1587c-17 0-33.3-6.7-45.3-18.7l-442-442c-25-25-25-65.5 0-90.5s65.5-25 90.5 
                  0l396.8 396.7 1000.7-1000.8c25-25 65.5-25 90.5 0s25 65.5 0 90.5l-1046 1046c-12 
                  12.1-28.2 18.8-45.2 18.8z" />
              </g>
            </g>
          </svg>
        </div>
        <div className='x'>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#AAAAAA"
            strokeWidth="15"
            width="16"
            height="16"
            fill="grey">
            <line x1="0" y1="100" x2="100" y2="0" />
            <line x1="0" y1="0" x2="100" y2="100" />
            <line></line>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ReceivedRequest;