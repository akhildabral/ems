import { UPDATE_BUDGET, ADD_CATEGORY } from '../reducers/settings'


export const updateBudget = (newBudget) => dispatch => {
  dispatch({
   type: UPDATE_BUDGET,
   payload: newBudget
  })
 }

export const addCategory = (newCategory) => dispatch => {
  dispatch({
   type: ADD_CATEGORY,
   payload: newCategory
  })
 }