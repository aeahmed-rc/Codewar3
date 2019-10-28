checkAlive/CheckAlive should return true if
the player's health is greater than 0 or false if it is 0 or below.

function checkAlive (health) {
  if (health <= 0) {
    return false
  } else {
    return true
  }
