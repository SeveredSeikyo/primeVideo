// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieItem} = props
  const {thumbnailUrl, videoUrl} = movieItem
  console.log(movieItem, thumbnailUrl, videoUrl)
  return (
    <>
      <div>
        <Popup
          modal
          trigger={
            <button type="button" className="movie-item-container">
              <img src={thumbnailUrl} alt="thumbnail" />
            </button>
          }
        >
          {close => (
            <div className="popup-container">
              <div className="close-button">
                <button
                  type="button"
                  data-testid="closeButton"
                  onClick={() => close()}
                >
                  <IoMdClose />
                </button>
              </div>
              <div>
                <ReactPlayer url={videoUrl} className="video-player" />
              </div>
            </div>
          )}
        </Popup>
      </div>
    </>
  )
}

export default MovieItem
