import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

// This is another way of fetching api (firebase) with async code. This fetch is for replaceCart() from cart-slice.js


export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://advanceredux-default-rtdb.firebaseio.com/cart.json'
            );

            if(!response) {
                throw new Error('Could not fetch cart data');
            }

            const data = await response.json();
            return data;
        };

        // We create custom items and totalQuantity object. They are equal to values from firebase.
        // This happens for replaceCart() type and after the sendData fetch one
        
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
            }));
        }
        catch(error){
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Fetching cart data failed!',
                })
              );   
        }
    }
}

export const sendCartData = (cart) => {

    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
              status: 'pending',
              title: 'Sending...',
              message: 'Sending cart data!',
            })
          );

          const sendRequest = async () => {
            const response = await fetch(
                'https://advanceredux-default-rtdb.firebaseio.com/cart.json',
                {
                  method: 'PUT',
                  body: JSON.stringify({
                      items:cart.items, 
                      totalQuantity: cart.totalQuantity,
                    }),
                }
              );
        
              if (!response.ok) {
                throw new Error('Sending cart data failed.');
              }
          };

          try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                  status: 'success',
                  title: 'Success!',
                  message: 'Sent cart data successfully!',
                })
              );
          } 

          catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Sending cart data failed!',
                })
              );
          }
    }
}