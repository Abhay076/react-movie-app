import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
// import movies from './reducers.js';
import rootReducer from './reducers.js';

//function logger(obj,next,action)
//logger(obj)(next)(action)
// const logger = function({dispatch,getState }){
//     return function(next){
//          return function(action){
//           //middleware code
//             console.log('ACTION_TYPE =', action.type);
//             next(action);
//           }
//     }
// }



const logger = ({dispatch,getState }) => (next) => (action) =>{
          //middleware code
            console.log('ACTION_TYPE =', action.type);
            next(action);
}


const store = createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store', store);

// console.log('AFTER STATE',store.getState());

// export const StoreContext = createContext();
// console.log('StoreConext',StoreContext);

// class Provider extends React.Component{
//     render (){
//       const {store} = this.props;
//       return ( <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//       );
//     }
// }

// export function connect (callback){
//      return function (Component){
//            class ConnectedComponent extends React.Component{
//            constructor (props){
//             super(props);
//             this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
//            }
//            componentWillUnmount(){
//             this.unsubscribe();
//            }
//             render (){
//               const { store } = this.props;
//               const state = store.getState();
//                     const dataToBePassedAsProps = callback(state);
//                     return (<Component 
//                     {...dataToBePassedAsProps}
//                      dispatch={store.dispatch}
//                      />
//                     );
//             }
//           };


//           class ConnectedComponentWrapper extends React.Component{
//             render(){
//                return (<StoreContext.Consumer>
//                 {(store) => <ConnectedComponent store={store} />}
//               </StoreContext.Consumer>
//                )
//             }
//           }
//           return ConnectedComponentWrapper;
//      };

// }

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// })
//console.log('BEFORE STATE',store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App  />
    </Provider>
  </React.StrictMode>
);

