import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import './styles.css';

export default function Catalog() {
    return(
        <>
        <Header />
        <main>
            <section id="catalog-section" className="top-cars-container">
                <SearchBar />
            </section>
        </main>
        </>
    );
}