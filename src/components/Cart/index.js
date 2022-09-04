import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      let totalIncome = 0

      cartList.forEach(each => {
        totalIncome += each.price * each.quantity
      })
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      const removeAllItem = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="cart-heading-style">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    className="remove-all-btn"
                    onClick={removeAllItem}
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
                {/* TODO: Add your code for Cart Summary here */}
                <div className="incomeContainer">
                  <div className="totalIncome">
                    <h1 className="incomePara">
                      Order Total:
                      <span className="amount"> Rs {totalIncome}/-</span>
                    </h1>
                    <p className="itemsPara">{`${cartList.length} items in cart`}</p>
                    <button type="button" className="checkoutBtn">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
