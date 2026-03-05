import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import './styles.css';

export default function Catalog() {
    return(
        <>
        <Header />
        <main className="top-cars-catalog-main">
            <section id="top-cars-catalog-section" className="top-cars-container">
                <div className="top-cars-container">
                    <SearchBar />
                </div>

                <div className="top-cars-catalog-cards-container">

                </div>
            </section>
        </main>
        </>
    );
}