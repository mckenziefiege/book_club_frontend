export const loginFetch = (e) => {
  return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: e.target.username.value,
          password: e.target.password.value
        }
      })
    }).then(resp => resp.json())
}

export const signUpFetch = (e) => {
  return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
        first_name: e.target.firstname.value,
        last_name: e.target.lastname.value,
        city: e.target.city.value,
        state: e.target.state.value,
        image: e.target.image.value,
        username: e.target.username.value,
        password: e.target.password.value
      }
      })
    }).then(resp => resp.json())
}

export const fetchingCurrentUser = (token) => {
  return fetch('http://localhost:3000/profile', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(resp => resp.json())
}
