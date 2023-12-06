import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ResultsPage() {
    const [domainInfo, setDomainInfo] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const name = queryParams.get('name');
        const suffix = queryParams.get('suffix');
        const proxyUrl = `/api/whois?name=${name}&suffix=${suffix}`;
        console.log('proxyUrl:', proxyUrl);

        fetch(proxyUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.status === 'ok') {
                    setDomainInfo(data);
                } else {
                    throw new Error('Error fetching domain information');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setError(error.message);
            });
    }, [location.search]); // Effect 依赖于 location.search

    if (error) {
        return <div>Error fetching domain information: {error}</div>;
    }

    if (!domainInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>Domain: {domainInfo.domain}</p>
            <p>Registered: {domainInfo.available ? 'No' : 'Yes'}</p>
            {domainInfo.creation_datetime && <p>Registration Date: {domainInfo.creation_datetime}</p>}
            {domainInfo.expiry_datetime && <p>Expiry Date: {domainInfo.expiry_datetime}</p>}
        </div>
    );
}

export default ResultsPage;
