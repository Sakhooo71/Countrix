import { useState, useEffect } from 'react'
import { CountryCard } from './components/CountryCard'



function App() {
  // Liste des pays
  /**
   * on definit un constant React avec un tableau a la place initial du nom
   * de la variable comme ceci [countries, setCountries]
   *  - la première valeur du tableau est la variable
   * - La Seconde vaaleur est le'setter qui permet de modifer la variable
   * Par la suite , on met en place l'etat initial de la variable  avec 
   */
  const [countries, setCountries] = useState([])

  // Region selectionnée
  const [region, setRegion] = useState("Europe")

  // afficher 
 
  // API restcountries
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${region}`) // va chercher les donnéesde l'API
    .then((response) => response.json())  // converti les données de JSON
    .then((data) =>  setCountries(data));  // on met le tableau dans la variable countries
    
  }, [region]);


  return (
    <div className='row gap-4 text-center justify-content-center'> 
    
      {
          countries.map((country) => (
          <CountryCard key={country.cca2} country={country} />
          ))
       }   

      </div>  // Fragment
  )
}

export default App










/*<h2 className='text-light' key={country.cca2}>{country.name.common}</h2> */