/* Importing the createContext and useReducer from the react library. */
import { createContext, useReducer } from 'react';

/* Creating a context object. */
export const themeContext = createContext();

/* Setting the initial state of the application. */
const initialState = { darkMode: false };

const themReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themReducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};

/*                                            Note
====================================================================================================
Whit the components of this file we can change the Application Mode from Light Mode to Dark Mode 
and from Dark Mode to Light Mode and this fill componet mostly used with Toggle Button(Component).,
inside this File the component that we have are used:

 ThemeProvider function:
The ThemeProvider function is a component that returns a themeContext.Provider component that has a
  value prop that is an object with a state and dispatch property.
 themReducer:
 If the action type is 'toggle', return a new state object with the darkMode property set to the
 opposite of the current state's darkMode property. Otherwise, return the current state.

 and so....

*/
