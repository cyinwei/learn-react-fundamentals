import React from 'react'
import { Link } from 'react-router'
import Styles from '../../styles/base'

const Home = (props) => {
  return (
    <div className='jumbotron col-sm-12 text-center' style={Styles.transparentBg}>
      <h1>Github Battle!</h1>
      <p>Some fancy motto</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>
          Get Started
        </button>
      </Link>
    </div>
  )
}

export default Home