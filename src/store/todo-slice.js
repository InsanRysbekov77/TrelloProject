import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		columnData: [],
	},
	reducers: {
		add: (state, action) => {
			state.columnData.push(action.payload)
		},
		addTextArea: (state, action) => {
			const { taskData, key } = action.payload
			state.columnData.map((el) => {
				if (el.id === key) {
					el.tasks.push(taskData)
				}
				return el
			})
		},
	},
})
export const todoSliceActions = todoSlice.actions
export default todoSlice
