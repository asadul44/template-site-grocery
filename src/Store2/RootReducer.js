export const initialState = {
    darkMode : false
};


export const RootReducer = (state = initialState, action) => {

      if(action.type === "DARK_MODE"){

        return{
         ...state,
         darkMode : !state.darkMode 
        }
       
     }
    
};