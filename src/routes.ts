import { Router } from 'express'
import PokemonController from './Pokemon/pokemon.controller'
import TeamController from './TimePokemon/team.controller'

const routes = Router()

//-------------------------------

routes.post('/consumirData', PokemonController.consumirPokeData)
routes.get('/pokemonsByType', PokemonController.pokemonsByType)
routes.get('/pokemon/type/:type', PokemonController.getPokemonsByType)
routes.get('/pokemon/numDex/:numDex', PokemonController.getPokemonsByNumDex)
routes.get('/pokemon/nome/:nome', PokemonController.getPokemonsByNome)

//---------------------------------

routes.post('/team', TeamController.create)
routes.get('/team', TeamController.find)
routes.get('/team/trainerName/:trainerName', TeamController.findByTrainerName)
routes.put('/team', TeamController.update)
routes.delete('/team/:trainerName', TeamController.delete)



export default routes