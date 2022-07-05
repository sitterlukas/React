import { Name, ItemDetails, CartItemContainer, Img } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <Name>
          {quantity} x ${price}
        </Name>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
