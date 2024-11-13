import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionsList = []
  const comedyList = []

  moviesList.forEach(item => {
    if (item.categoryId === 'ACTION') {
      actionsList.push(item)
    } else if (item.categoryId === 'COMEDY') {
      comedyList.push(item)
    }
  })

  console.log(moviesList, actionsList, comedyList)

  return (
    <div className="main-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-image"
        />
      </div>
      <div className="slides-container">
        <div>
          <h1>Action Movies</h1>
          <MoviesSlider categoryList={actionsList} />
        </div>
        <div>
          <h1>Comedy Movies</h1>
          <MoviesSlider categoryList={comedyList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
