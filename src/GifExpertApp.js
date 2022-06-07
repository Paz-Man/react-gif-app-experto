import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

     const GifExpertApp = () => {

      // const categories=['Óne Punch','Dragon Ball','Samurais']

      const [categories, setCategories] = useState(['Dragon Ball']);

      // const handleAdd=()=>{

      //   // setCategories([...categories,"HunterXHunter"]);

      //   //Tambien otra solucion seria

      //   setCategories(cat=>[...categories,"XHunter"]);

      // }

  return (
    <>
    <h2>GifAppExperto</h2>
    <AddCategory setCategories={setCategories}/>
    <hr/>
    <ol>
    {
      categories.map(category=>(<GifGrid key={category} category={category}/>))
    }

    </ol>
    </>
  )
}

export default GifExpertApp;

