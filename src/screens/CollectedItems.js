import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import CardRendering from '../components/CardRendering'
import SearchBar from "../components/SearchBar";

export default function CollectedItems() {
  return (
    <>
      <NavigationBar />
      <SearchBar/>
      <CardRendering/>
    <CardRendering/>
    <CardRendering/>
    <CardRendering/>
      <Footer />
    </>
  );
}
