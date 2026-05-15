import { useNavigate } from 'react-router-dom';
import './home.css';
import Header from '../../components/header/header';

export default function Home() {

    const navigate = useNavigate();


    return (
        <div className="home">
            {/* <Header />
            
            <div className='home-info'>
                <h2>Welcome to Schoolio!</h2>
                <p>Discover and compare schools across the United States with ease. Our comprehensive database allows you to explore schools by state, county, and city, providing detailed information on demographics, performance, and more. Whether you're a parent looking for the best school for your child or a student researching potential options, Schoolio is your go-to resource for making informed decisions about education.</p>
                
            </div> */}
            <div className='home-content-wrapper'>
                <h2>Schoolio</h2>
                <p>Schoolio uses a comprehensive dataset to provide information, insights and comparisons on data related to 23,000+ high schools in the United States of America. Data available per school includes ethnicity data, crime, granular health data (lead exposure risk, access to healthcare, etc.), housing data, financial health data, family data. Schools can be compared to each other relevant to data topics like health, economy, crime, composite test scores, housing, infant mortality and many others. Thanks for visiting and enjoy the data! Get started by clicking the button below.</p>
                <button onClick={() => navigate('/schools')}>Explore Schools</button>
                <p>It is advised to refrain from accessing this website via a cellular phone or mobile device. This application uses a large amount of compute power and performace will be optimal on a desktop or laptop computer.</p>
            </div>
        </div>
    );
}