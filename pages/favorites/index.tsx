import { Card, Grid } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { FavoritePokemon } from '../../components/pokemon'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'

const FavoritesPages = () => {
  
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>();

  useEffect(() => {
      setFavoritePokemons(localFavorites.pokemons());
  }, [])
  

  return (
    <Layout title="Pokemones - Favoritos">
      {
        favoritePokemons?.length === 0 ?(
          <NoFavorites />
        ):(
          <FavoritePokemon pokemons={ favoritePokemons } />
        )
      }
      </Layout>
  )
}

export default FavoritesPages