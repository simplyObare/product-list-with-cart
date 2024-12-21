import { desserts } from '../data/data'
import DessertCard from './DessertCard'

const Dessert = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Desserts</h1>
      <div className="dessert-section grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {desserts.map((dessert, key) => (
          <DessertCard key={key} dessert={dessert} />
        ))}
      </div>
    </div>
  )
}
export default Dessert
