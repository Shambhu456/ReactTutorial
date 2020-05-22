const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers 


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: 'Second Redux Action'
    }
}

//(previousState, action) => newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes:10
}

const initialIceCreanState = {
    numOfIceCreams:20
}
// const reducer = (state=initialState, action)=>{
//     switch(action.type){
//         case BUY_CAKE: return {
//             ... state,//Create a copy of the state
//             numOfCakes: state.numOfCakes - 1
//         }

//         case BUY_ICECREAM: return {
//             ... state,//Create a copy of the state
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }

const cakeReducer = (state=initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ... state,//Create a copy of the state
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state=initialIceCreanState, action)=>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ... state,//Create a copy of the state
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
     cake: cakeReducer,
     iceCream: iceCreamReducer
})

const store = createStore(rootReducer)
console.log('Initial State', store.getState())

const unsubscribe=store.subscribe(()=>console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
unsubscribe()