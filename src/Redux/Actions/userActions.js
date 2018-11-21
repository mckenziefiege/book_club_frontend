
const handleLogout = () => {(type: 'HANDLE_LOGOUT'), payload: {}}


handleLogout = () => {
    localStorage.removeItem("token")
    this.setState({ auth: { currentUser: {} } })
    this.props.history.push("/")
  }
