    import { createGlobalState } from 'react-hooks-global-state';
    import CustomerData from './../CustomerData';


    const { setGlobalState, useGlobalState } = createGlobalState({
        total: 0,
        cartItems:[],
        loginStatus : false,
        customers : CustomerData?.customers,
        currentUser : {},
        searchTerm : "",
        favoriteProduct : [],
        orderProducts : [],
      
      
      });

      export const setTotal = () => {
        setGlobalState('total', (v) => v);
        console.log("hello")
      
      };
      export const setCartItems = () =>{
        setGlobalState('cartItems', (v) => v);
      }
      export const setLoginStatus = () =>{
        setGlobalState('loginStatus', (v) => v);
      }
      export const setCustomers = () =>{
        setGlobalState('customers', (v) => v);
      }

      export const setCurrentUser = () =>{
        setGlobalState('currentUser', (v) => v);
      }
      export const setSearchTerm = () =>{
        setGlobalState('searchTerm', (v) => v);
      }
      export const setFavoriteProduct = () =>{
        setGlobalState('favoriteProduct', (v) => v);
      }
      export const setOrderProducts = () =>{
        setGlobalState('orderProducts', (v) => v);
      }


    export { useGlobalState };