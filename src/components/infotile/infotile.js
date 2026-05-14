import './infotile.css';

export default function Infotile({ title, content }) {
    return (
        content != 'N/A%' && content != "0%" && content != NaN? (
            <div className='infotile'>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        ) : null
    );
}