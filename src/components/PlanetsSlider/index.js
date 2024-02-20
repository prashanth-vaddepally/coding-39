// Write your code here
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="overall">
      <h1>PLANETS</h1>
      <ul data-testid="planets">
        {planetsList.map(eachItem => (
          <PlanetItem theList={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default PlanetsSlider
