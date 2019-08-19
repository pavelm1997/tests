export const  creteTodo = (value)=>({
        id:(new Date()).getTime(),
        title: value,
        completed: false,
});