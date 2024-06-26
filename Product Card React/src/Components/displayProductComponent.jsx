import { useState } from 'react';
import '../card.css';

const DisplayComponent = ({ shoe }) => {
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedImage, setSelectedImage] = useState('/black.png'); // Default image

    const colors = shoe.availableColors;
    const colorToImageMap = {
        Black: '/black.png',
        Red: '/red.png',
        Grey: '/grey.png',
        Blue: '/blue.png',
        Orange: '/orange.png'
    };

    const changeBgColorAndImage = (color) => {
        setSelectedColor(color);
        setSelectedImage(colorToImageMap[color]);
    };

    return (
        <body>
            <div className="Card">
                <div style={{ backgroundColor: selectedColor }}>
                <img src={selectedImage} width={400} alt={shoe.title} />

                </div>
                <h1>{shoe.title}</h1>
                <h3>{shoe.collection}</h3>
                <p>{shoe.description}</p>
                <b>Available Colors:</b>
                <p>
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            onClick={() => changeBgColorAndImage(color)}
                            style={{
                                backgroundColor: color,
                                padding: '10px',
                                borderRadius: '100%',
                                border: 'none',
                                margin: '5px'
                            }}
                        ></button>
                    ))}
                </p>
                <p>Price: Kshs {shoe.price}</p>
            </div>
        </body>
    );
};

export default DisplayComponent;
