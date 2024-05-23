import React, { useState, useEffect } from 'react';

const Contacts = () => {
    const [planets, setPlanets] = useState([]);
    const [showPlanets, setShowPlanets] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        to: '',
        text: ''
    });

    useEffect(() => {
        fetch("https://sw-info-api.herokuapp.com/v1/planets")
            .then(response => response.json())
            .then(data => {
                setPlanets(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        setShowPlanets(true);
    }

    return (
        <div>
            <h1>Contacts</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td>Title:</td>
                        <td><input type="text" name="title" value={formData.title} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>To:</td>
                        <td><input type="text" name="to" value={formData.to} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td>Text:</td>
                        <td><textarea name="text" value={formData.text} onChange={handleInputChange}></textarea></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><button type="submit">Send</button></td>
                    </tr>
                    </tbody>
                </table>
            </form>
            {showPlanets && (
                <div>
                    {planets.map(planet => (
                        <div key={planet.id}>
                            <h2>{planet.name}</h2>
                            <p>{planet.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Contacts;