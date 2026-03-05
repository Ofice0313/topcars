import Card from "../../components/Card";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import './styles.css';

export default function Catalog() {
    return(
        <>
        <Header />
        <main className="top-cars-catalog-main">
            <section id="top-cars-catalog-section" className="top-cars-container">
                <div className="top-cars-container top-cars-catalog-header">
                    <SearchBar />
                </div>

                <div className="top-cars-container top-cars-catalog-cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card /> 
                </div>
            </section>
        </main>
        </>
    );
}