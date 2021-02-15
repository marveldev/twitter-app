const addTrendingPaneEvents = () => {
  document.querySelector('#trendButton').addEventListener('click', () => {
    document.querySelector('.trend-modal').style.display = 'block'
    document.querySelector('#overlay').style.display = 'block'
  })

  document.querySelector('#closeTrendModalButton').addEventListener('click', () => {
    document.querySelector('.trend-modal').style.display = 'none'
    document.querySelector('#overlay').style.display = 'none'
  })
}

export default addTrendingPaneEvents
