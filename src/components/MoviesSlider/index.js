// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {categoryList} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div style={{backgroundColor: 'transparent', padding: '40px'}}>
      <Slider {...settings}>
        {categoryList.map(item => (
          <MovieItem movieItem={item} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
