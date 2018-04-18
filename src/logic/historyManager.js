export default function HistoryManager() {
  const history = []

  return {
    addToHistory(player1choice, player2choice, result) {
      history.push({
        ...arguments
      })
    },

    returnHistory() {
      return history
    }
  }
}
