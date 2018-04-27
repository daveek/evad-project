import * as services from '../services'

export const fetchCities = function ({dispatch}) {
  // Call the messages service on the server via websocket
  services.messageService.find({}).then(cities => {
    dispatch('FETCH_CITIES', cities.data)
  })
}

export const addCity = function ({dispatch}) {
  // A new message has been created on the server, so dispatch a mutation to update our state/view
  services.cityService.on('created', city => {
    dispatch('ADD_CITY', city)
  })
}

export const removeMessage = function ({dispatch}) {
  // A message has been removed from the server, so dispatch a mutation to update our state/view
  services.cityService.on('removed', city => {
    dispatch('REMOVE_CITY', city)
  })
}
