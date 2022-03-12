import { FC } from "react"

import Head from "next/head"
import {Navbar} from '../ui'

interface Props {
    title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout:FC<Props> = ({children, title}) => {

  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="author" content="Eduaro Duarte" />
            <meta name="description" content={`Informacion sobre el pokemon${title} `}/>
            <meta name="keywords" content={`${title} pokemon, pokedex`}/>
            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title}`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>

        {/*Navbar*/}
      <Navbar />  

        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
