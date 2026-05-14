import { useNavigate } from 'react-router-dom';
import './header.css';

export default function Header() {

    const navigate = useNavigate();

    const handleTitleClick = () => {
        navigate('/');
    };
    return (
        <header className='header'>
            <h1 onClick={handleTitleClick}>Schoolio</h1>
        </header>
    );
}