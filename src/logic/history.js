const history = []

export function addToHistory(player1choice, player2choice, result) {
  history.push({
    ...arguments
  })
}

export function returnHistory() {
  return history
}


