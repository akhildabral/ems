export const UPDATE_BUDGET = 'UPDATE_BUDGET';
export const ADD_CATEGORY = 'ADD_CATEGORY';

const defState = {
  totalBudget : 0,
  categories : []
}

export default (state = defState, action) => {
  switch (action.type) {
   case UPDATE_BUDGET:
    return {
      ...state,
     totalBudget: action.payload
    }
   case ADD_CATEGORY:
    return {
      ...state,
     categories: [...state.categories, action.payload]
    }
   default:
    return state
  }
 }