import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const domainName = event.target.elements.domainName.value;
        const domainSuffix = event.target.elements.domainSuffix.value;
        navigate(`/results?name=${domainName}&suffix=${domainSuffix}`);
    };

    return (
        <section style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Domain Checker</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="domainName" placeholder="Domain Name (e.g., google)" />
                <input type="text" name="domainSuffix" placeholder="Suffix (e.g., com)" />
                <button type="submit">Check</button>
            </form>
        </section>
    );
}

export default HomePage;
