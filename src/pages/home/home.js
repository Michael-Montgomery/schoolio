import { useNavigate } from 'react-router-dom';
import './home.css';

export default function Home() {

    const navigate = useNavigate();


    return (
        <div className="home">
            <button onClick={() => navigate('/schools')}>Explore Schools</button>
        </div>
    );
}