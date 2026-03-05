import carImg from '../../assets/images/car-card 1.svg'
import Button from '../Button';
import './styles.css'

export default function Card() {
    return(
        <div className="top-cars-card">
            <img src={carImg} alt="Car" />
            <h3>Audi Supra IT</h3>
            <p><i></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi<i/></p>
            <div>
                <Button />
            </div>
        </div>
    );
}