import Cards from "../../components/Cards/Cards";
import { useState } from 'react';
import { useSelector } from "react-redux";
import style from "./Home.module.css";
import Pagination from "../../components/Paginacion/Paginacion"
import NavBar from "../../components/NavBar/NavBar";
import Order from "../../components/Order/Order";
import Filter from "../../components/Filter/Filter";

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1); 
    const pokemonsPerPage = 12; 
    
    const pokemons = useSelector(state=>state.pokemons)

    const handlePaginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastPokemon = currentPage * pokemonsPerPage; 
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons?.length > 0 && pokemons.slice(
        indexOfFirstPokemon,
        indexOfLastPokemon
    );
    
        return (
            <div className={style.HomeBackground}>
                <NavBar setCurrentPage={setCurrentPage}/>
                <div>
                    <div className={style.PaginationOrdenContainer}>
                        <Filter setCurrentPage={setCurrentPage}></Filter>
                        <Pagination
                            pokemonsPerPage={pokemonsPerPage}
                            totalPokemons={pokemons?.length}
                            currentPage={currentPage}
                            handlePaginate={handlePaginate}
                        />
                        <Order setCurrentPage={setCurrentPage}></Order>
                    </div>
                    <Cards pokemons={currentPokemons} />
                </div>
            </div>
        );
}

export default Home; 