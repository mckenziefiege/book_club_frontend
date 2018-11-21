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
