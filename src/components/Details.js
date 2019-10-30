import React, { useState, useEffect} from 'react'

import Card from './Card'

function Details(props) {

  const [isLoading, setIsLoading] = useState(false)

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.id}.json`, {
        method: 'GET'
      })
      .then(res => res.json())
      .then(
        (result) => {
          setUserInfo(result)
          setIsLoading(false)
        },
        (error) => console.log(error)
      )
      console.log('END '+props.id)

  }, [props.id])

  return (
    <>
      {isLoading && <p>Загрузка</p> }
      {userInfo && <Card user={userInfo}/>}
    </>
  )
}

export default Details;