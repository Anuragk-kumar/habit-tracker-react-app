export const ADD_HABIT = "ADD_HABIT";
export const DELETE_HABIT = "DELETE_HABIT";
export const ADD_HABIT_STATUS = "ADD_HABIT_STATUS";
export const ADD_WEEKLY_DONE_STATUS = "ADD_WEEKLY_DONE_STATUS";


//action creators

/**
 * The addHabit function creates an action object with a unique id and a name payload.
 * @param name - The `name` parameter is a string that represents the name of the habit that you want
 * to add.
 * @returns an object with a type property set to "ADD_HABIT" and a payload property containing an
 * object with an id and name property.
 */
export function addHabit(name) {
  return {
    type: ADD_HABIT,
    payload: {
      id: Date.now() + Math.random(),
      name: name,
    },
  };
}

/**
 * The deleteHabit function is an action creator that returns an action object with the type
 * DELETE_HABIT and the id of the habit to be deleted.
 * @param id - The `id` parameter is the unique identifier of the habit that you want to delete.
 * @returns an object with two properties: "type" and "id".
 */
export function deleteHabit(id) {
  return {
    type: DELETE_HABIT,
    id,
  };
}
/**
 * The function `addHabitStatus` takes an object as input and returns an action object with the type
 * `ADD_HABIT_STATUS`, along with the id and doneStatus properties from the input object.
 * @param obj - The `obj` parameter is an object that contains the following properties:
 * @returns an object with the properties "type", "id", and "doneStatus".
 */

export function addHabitStatus(obj) {
  return {
    type: ADD_HABIT_STATUS,
    id: obj.id,
    doneStatus : obj.doneStatus,
  };
}

/**
 * The function adds a weekly done status to an object.
 * @param obj - The `obj` parameter is an object that contains the following properties:
 * @returns an object with the following properties: type, id, doneStatus, and index.
 */
export function addWeeklyDoneStatus(obj) {
  return {
    type: ADD_WEEKLY_DONE_STATUS,
    id: obj.id,
    doneStatus : obj.doneStatus,
    index : obj.index 
  };
}

