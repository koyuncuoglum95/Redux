// STEP 1: This is importing redux

const redux = require('redux');

// STEP 2: counterReducer function increase the number of counter object from its default value.
const counterReducer = (state={counter: 0} , action) => {
    if(action.type == 'increment') {
        return {
            counter: state.counter + 1,
        };
    }

    if(action.type == 'decrement') {
        return {
            counter: state.counter -1,
        };
    }

    return state;
};

// STEP 3: store enable us to upload the main function or app into the store.So, the following code is syntax.
const store = redux.createStore(counterReducer);

// console.log(store.getState());

// STEP 4: In this function, we use getState() method in which help us to bring the state from the counterReducer function that is "counter" object.
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

// STEP 5: counterSubscriber function is supposed to be awared, so we use subscribe method in order to realize the latest state which is "counter".
store.subscribe(counterSubscriber);

// STEP 6: dispatch method is the other way of running the counterReducer function except the previous way. type: 'increment' declares the action of the main function (counterReducer)
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });