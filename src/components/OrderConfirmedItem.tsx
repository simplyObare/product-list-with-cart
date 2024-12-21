import { type CartItem } from '../store/cart'

type OrderConfirmedItemProps = {
  cart: CartItem
}

const OrderConfirmedItem: React.FC<OrderConfirmedItemProps> = ({ cart }) => {
  return (
    <div className="main-container text-gray-700">
      <div className="my-4 flex items-center justify-between">
        <div className="img-and-name flex items-center gap-5">
          <div className="img-container overflow-hidden w-14 h-14 rounded-xl">
            <img src={cart.image} alt="" className="object-cover" />
          </div>
          <div className="name-container flex flex-col justify-between">
            <h1 className="font-semibold">{cart.name}</h1>
            <div className="price-and-quantity flex items-center gap-4 ">
              <p className="text-red font-semibold">{cart.quantity}x</p>
              <p>@ ${cart.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="price">
          <p className="font-semibold">
            ${(cart.quantity * cart.price).toFixed(2)}
          </p>
        </div>
      </div>
      <hr />
    </div>
  )
}
export default OrderConfirmedItem
