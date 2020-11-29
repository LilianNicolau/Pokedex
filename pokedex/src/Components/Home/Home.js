import React, { useContext ,useState} from 'react';
// import GlobalState from '../global/GlobalState';
import GlobalStateContext from '../global/GlobalStateContext';
import { useHistory } from 'react-router-dom';
import PokeCard from '../PokeCard/PokeCard'


import { GridContainer } from './styled';

function Home  ()  {


  const {states,buttons} = useContext(GlobalStateContext);
  const history = useHistory();
        

  const funcaoAdicionar = ( id)  => {
  //adiciona os pokemons na Pokedex através do estado global
    const pokedex = buttons.adicionarPokemon
    const pokeIndex = states.pokemonList
    const novosPokemons = pokeIndex.filter ((poke => { return poke.id !== id })) 
    pokedex.push(id)
    states.setPokemonList(novosPokemons);
    buttons.setAdicionarPokemon(pokedex)
  }
    
    

  const funcaoDetalhes = ( id)  => {
    //ver detalhes do pokemon
    buttons.setVerDetalhes(id)
    history.push('/detalhes')
  }

  return(
    <GridContainer>
      {/* pega o estado pokemonList e mapeia ele pra pegar o url  */}
          {states.pokemonList && states.pokemonList.map((item) =>{ 
            return <PokeCard nome={item.name} key={item.id} adicionar={() => {funcaoAdicionar(item.id)}} detalhes={() => {funcaoDetalhes(item.id)}} img={item.sprites.front_default} />  
              }
            ) 
          } 
          
    </GridContainer>
  )
}






export default Home;