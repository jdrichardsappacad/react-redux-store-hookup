// this would normally come from your database
const initialState = [
  { id: 1, name: 'banana' },
  { id: 2, name: 'pear' },
  { id: 3, name: 'orange' },
  { id: 4, name: 'peach' }
];

const fruitReducer = (state = initialState, action) => {
  return state;
};
export default fruitReducer;
