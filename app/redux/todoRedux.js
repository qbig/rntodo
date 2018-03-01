const types = {
	ADD_ITEM : "ADD_ITEM",
	REMOVE_ITEM : "REMOVE_ITEM",
	TOGGLE_ITEM_COMPLETED : "TOGGLE_ITEM_COMPLETED",
	REMOVE_COMPLETED_ITEMS : "REMOVE_COMPLETED_ITEMS"
}

export const actionCreators = {
	addItem: (text) => {
		return {
			type: types.ADD_ITEM,
			payload: text
		}
	},
	removeItem: (index) => {
		return {
			type: types.REMOVE_ITEM,
			payload: index
		}
	},
	toggleItemCompletes: (index) => {
		return {
			type: types.TOGGLE_ITEM_COMPLETED,
			payload: index
		}
	}, 
	removeCompletedItems: () =>  {
		return {
			type: types.REMOVE_COMPLETED_ITEMS
		}
	}
}

const initialState = {
  items: [],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type) {
  	case types.ADD_ITEM: 
  		return {
	  		items: [
	  			...state.items,
	  			{
	  				text: payload,
	  				completed: false,
	  				id:state.length,
	  			},
	  			
	  		]
  		}
  		break;
  	case types.REMOVE_ITEM:
  		return {
  			items: state.items.filter((item, index) => index != payload)
  		}
  		break;
  	case types.TOGGLE_ITEM_COMPLETED:
  		return {
  			items: state.items.map((item, index) => index == payload ? 
  				{text: item.text, id: item.id, completed: !item.completed}: item)
  		}
  		break;
  	case types.REMOVE_COMPLETED_ITEMS:
  		return {
  			items: state.items.filter(item => !item.completed)
  		}
    default: {
      return state
    }
  }
}
