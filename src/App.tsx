import Cart from './components/Cart'
import Dessert from './components/Dessert'
import OrderConfirmed from './components/OrderConfirmed'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'

function App() {
  const orderConfirmed = useSelector(
    (store: RootState) => store.cart.orderConfirmed
  )

  return (
    <main className="w-screen bg-rose-50 font-sansRedHat">
      {orderConfirmed && <OrderConfirmed />}
      <div className=" p-6 md:p-8 lg:p-10 flex flex-col md:flex-row lg:flex-row gap-8">
        <Dessert />
        <Cart />
      </div>
    </main>
  )
}

export default App
