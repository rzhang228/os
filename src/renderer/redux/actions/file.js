// ================================
// Action Type
// ================================
const SET_FILE = 'SET_FILE'

// ================================
// Action Creator
// ================================
const setFile = fileObj => ({
  type: SET_FILE,
  payload: fileObj
})

/* default 导出所有 Action Creators */
export default {
  setFile
}

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
  [SET_FILE]: (fileObj, { payload }) => payload
}
