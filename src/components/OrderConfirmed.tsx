import imgConfirm from '../assets/images/icon-order-confirmed.svg'
import OrderConfirmedItem from './OrderConfirmedItem'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { toggleOrderConfirmed } from '../store/cart'

const OrderConfirmed = () => {
  const carts = useSelector((store: RootState) => store.cart.items)
  console.log(carts)

  const dispatch = useDispatch()

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="grid place-content-center w-screen h-auto sm:h-screen md:h-screen lg:h-screen bg-transparent">
        <div className="main-container my-10 sm:my-14 bg-white w-screen sm:w-[450px] md:w-[500px] lg:w-[550px] h-fit rounded-xl p-6 md:p-8 lg:p-10">
          <div className="top-container space-y-3 mb-4">
            <img src={imgConfirm} alt="" className="mb-5" />
            <h1 className="text-4xl font-bold">Order Confirmed</h1>
            <p className="text-slate-700">We hope you enjoy your food!</p>
          </div>

          <div className="mid-container p-5  bg-rose-50 rounded-xl">
            <div className="order-items">
              {carts.map((cart, key) => (
                <OrderConfirmedItem key={key} cart={cart} />
              ))}
            </div>
            <div className="order-total flex item-center justify-between mt-6">
              <p className=" text-slate-700">Order total</p>
              <p className="text-2xl font-bold">
                $
                {carts
                  .reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>

          <button
            className="w-full bg-red hover:bg-rose-900 hover:scale-105 text-white font-semibold px-2 py-4 rounded-full border-rose-900 mt-6"
            onClick={() => dispatch(toggleOrderConfirmed())}
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  )
}
export default OrderConfirmed
