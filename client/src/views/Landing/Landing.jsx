import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Esta es la vista de LANDING</h1>
            <button onClick={() => navigate('/home')}>Let's start</button>
        </div>
    )
};

export default Landing;