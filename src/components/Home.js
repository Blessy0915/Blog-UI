import React from 'react'
import blogger2 from './blogger2.png'
export default function Home(){
    return(
        <div align="center">
            <h2>Welcome To The Blogger's Application!!!</h2>
            <br/>
            <br/>
            <div className="offset-md-12 pb4">

                <img src={blogger2} width="300" length="300"className="img-rounded"/>
              
            </div>
        </div>
    )
}