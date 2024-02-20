// Write your code here
import './index.css'
import {Slider} from 'react-slick'

const PlanetItem = props => {
  const {theList} = props
  const {name, imageUrl, description} = theList
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <li>
      <Slider {...settings}>
        <div>
          <img src={imageUrl} alt={name} />
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </Slider>
    </li>
  )
}
export default PlanetItem
