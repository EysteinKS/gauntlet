import React, { Component, Fragment } from 'react'

export default class Header extends Component {

  //CHECK IF USER IS LOGGED IN

  render() {
    let auth = this.props.auth
    return (
      <header>
        {auth
        ? <AuthHeader/>
        : <UnAuthHeader/>}
      </header>
    )
  }
}

const AuthHeader = () => {
  return(
    <Fragment>
      <button>
        Sign Out
      </button>
    </Fragment>
  )
}

const UnAuthHeader = () => {
  return(
    <Fragment>
      <button>
        Log In
      </button>
    </Fragment>
  )
}