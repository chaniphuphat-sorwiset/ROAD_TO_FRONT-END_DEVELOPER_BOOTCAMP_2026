localStorage.setItem("username", "JohnDoe")

let username = localStorage.getItem("username")
console.log("Username:", username)

function checkLocalStorageKey(key) {
  if (localStorage.getItem(key) !== null) {
    console.log("Key exists:", key)
  } else {
    console.log("Key does not exist:", key)
  }
}

checkLocalStorageKey("password")

localStorage.setItem("username", "JaneDoe")
username = localStorage.getItem("username")
console.log("Username:", username)

localStorage.removeItem("username")

localStorage.setItem("username", "JohnDoe")
localStorage.setItem("age", "25")
localStorage.setItem("city", "New York")

checkLocalStorageKey("username")

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i)
  let value = localStorage.getItem(key)
  console.log(`${key}: ${value}`)
}

localStorage.clear()

console.log("-----")

let user = {
  name: "JohnDoe",
  age: 25,
  city: "New York",
}

localStorage.setItem("user", JSON.stringify(user))

let storedUser = JSON.parse(localStorage.getItem("user"))
console.log("User:", storedUser)
