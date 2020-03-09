let initState = {
  taskDefault: {
    split: 16,
    savePath: '/Users/zhaojin11/Downloads'
  },
  newTaskUrl: [],
  newTaskSplit: 16,
  newTaskRename: '',
  newTaskSavePath: '/Users/zhaojin11/Downloads'
}
function task(state = initState,action){
  switch(action.type){
    case 'addTask':
      
      return state
    default:
      return state
  }
}
export default task