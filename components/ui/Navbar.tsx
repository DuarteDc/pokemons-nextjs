import { Spacer, Text, useTheme, Link } from "@nextui-org/react"
import Image from "next/image";
import NextLink from 'next/link'

export const Navbar = () => {

    const { theme } = useTheme();

  return (
    <div style={{
        display:'flex', 
        width:'100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray900.value
    }}>

        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
            alt="Icono"
            width={50}
            height={50}
        />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okemon</Text>
        </Link>
      </NextLink>

        <Spacer css={{flex:1}} />
        <NextLink href="/favorites" passHref>
          <Link css={{ marginRight: '10px' }}>
              <Text color="white">favoritos</Text>
          </Link>
        </NextLink>
    </div>
  )
}
