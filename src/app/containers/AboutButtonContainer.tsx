import React from 'react'
import {connect} from 'react-redux'
import {toggleAboutDraw} from '../actions'
import { HandleClick } from '../../general/types';
import { Dispatch } from 'redux';

interface IProps {
   toggleAboutDraw : HandleClick
}

const AboutButton : React.SFC<IProps> = (props) => (
   <button type="button" className="btn btn-link about-btn" onClick={props.toggleAboutDraw} >About</button>
)

const mapDispatchToProps = (dispatch:Dispatch<any>) =>({
   toggleAboutDraw : () =>   dispatch(toggleAboutDraw())
})

const AboutButtonContainer = connect(null, mapDispatchToProps)(AboutButton)

export default AboutButtonContainer
