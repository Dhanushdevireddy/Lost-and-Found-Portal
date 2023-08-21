import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

export default function CollectedItems() {
  return (
    <>
      <NavigationBar />
      <SearchBar/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Footer />
    </>
  );
}
