import './userInfo.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const UserInfo = (props) => {
  // const selector = reduxState => reduxState;
  // const reduxState = useSelector(selector);   // reduxState

  // const [value, setValue] = useState(props.userKey ? reduxState.user[props.userKey] : '');

  // useEffect(() => {
  //   // console.log('component "UserInfo" loaded or updated..');
  //   // console.log('this is actual Redux state: ', reduxState);

  //   if (value === '')
  //     setValue(value => value = reduxState.user[props.userKey]);
  // });

  // const handleChange = (e) => {
  //   setValue(value => value = e.target.value);
  // }

  return (
    <div className='user-info'>
      <p className='attribute'>{props.label ? props.label : 'label'}</p>
      <input className='value' name={props.userKey} value={props.value} onChange={props.handleChange} ></input>
    </div>
  );
}

export default UserInfo;
