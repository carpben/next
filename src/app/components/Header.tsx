import React from 'react'
import '../styles/Header.css'
import SignButtonContainer from '../containers/SignButtonContainer'
import AboutButtonContainer from '../containers/AboutButtonContainer'


const Header : React.SFC = 
   () => (
      <header>
         <div className="inner-w">
            <div className="left-w" >
               <h1>Next</h1>
               <h3>A smart to-do app</h3>
            </div>
            <div className="right-w">
               <AboutButtonContainer />
               <SignButtonContainer />
            </div>
         </div>
      </header>
   )

export default Header
