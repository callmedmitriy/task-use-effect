import React,{ useState, useEffect } from 'react';

import List from './components/List'
import Details from './components/Details'

function App() {

  const [userList, setUserList] = useState([])
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(
      (result) => setUserList(result),
      (error) => console.log(error)
    )
  }, [])

  return (
    <>
      <List users={userList} details={(id) => setUserDetails(id)}/>
      {userDetails && <Details id={userDetails}/>}
    </>
  );
}

export default App;
