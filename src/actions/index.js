
export const addTask = data => ({
  type: 'ADDTASK',
  id: data.id,
  text: data.text,
  status: data.status,
  order: data.order
})

export const updateTask = data => ({
  type: 'UPDATETASK',
  updatedArray: data
})


