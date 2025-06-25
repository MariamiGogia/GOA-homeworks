import { useState } from 'react';

const App = () =>{
  const [userInfo, setUserInfo] = useState({}); // shevqmenit mdgomareoba da mdgomareobis mmartveli

  const handleOnChange = ({ target }) =>{  // gavaketet destruqcia
    const {name, value} = target;   // zedmeti code rom ar dagvewera tavidanve shevqmenit name da value cvladebi

    setUserInfo(prev => ({...prev, [name]: value}));  // mdgomareobis mmartveli shecvlis prev's(userInfo) inputshi monacemis sheyvanisas
                                                      //sheiqmneba dictionary key iqneba name(FirsN an LastN) da inputis value
  }

  return(
    <>
    <label htmlFor="firstn">First Name: </label>
    <input type="text" name="FirstN" id="firstn" onChange={handleOnChange} /> 

    <br /> <br/> <br />

    <label htmlFor="lastn">Last Name: </label>
    <input type="text" name="LastN" id="lastn" onChange={handleOnChange} />

    <div>
      <h2>User: </h2>
      <p>First name: {userInfo.FirstN} </p> 
      <p>Last name: {userInfo.LastN}</p>
    </div>
    </>  // paragrafebshi chajdeba inputshi sheyvanili value

  );
}

export default App
