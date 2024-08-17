import React from 'react'
import HomeStyle from './Home.module.css'

function Home() {
  return (
    <div>
      <h2 className={HomeStyle.head}>This is a first heading</h2> 
      <h2>This is a second heading</h2>
    </div>
  )
}

// function About(){
//     return (
//         <h1>This is an about component</h1>
//     )
// }

export {Home} 
