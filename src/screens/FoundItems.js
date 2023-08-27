import React from 'react'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import CardRendering from '../components/CardRendering'
import SearchBar from '../components/SearchBar'

export default function FoundItems() {
  return (
    <>
    <NavigationBar/>
    <SearchBar/>
    <CardRendering/>
    <CardRendering/>
    <CardRendering/>
    <CardRendering/>
    <Footer/>
    </>
  )
}
