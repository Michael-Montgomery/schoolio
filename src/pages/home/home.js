import { useNavigate } from 'react-router-dom';
import './home.css';
import Header from '../../components/header/header';

export default function Home() {

    const navigate = useNavigate();


    return (
        <div className="home">
            <Header />
            
            <div className='home-info'>
                <h2>Welcome to Schoolio!</h2>
                <p>Discover and compare schools across the United States with ease. Our comprehensive database allows you to explore schools by state, county, and city, providing detailed information on demographics, performance, and more. Whether you're a parent looking for the best school for your child or a student researching potential options, Schoolio is your go-to resource for making informed decisions about education.</p>
                <button onClick={() => navigate('/schools')}>Explore Schools</button>
            </div>
        </div>
    );
}