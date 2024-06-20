import '../card.css'
const DisplayComponent = ({shoe}) => {
    const colors = shoe.availableColors
    // function changeColor(){
    //     alert('color changed')
    // }
    return(
        <>
            <div className="Card">
                <img src="/black.png" width={400} alt="" />
                <h1>{shoe.title}</h1>
                <h3>{shoe.collection}</h3>
                <p>{shoe.description}</p>
                <b>Available Colors:</b>
                <p>{colors.map((color) => (
                    <button onClick={() => changeColor(color)}
                    style={{backgroundColor: color, padding: '10px', borderRadius: '100%'}}
                    ></button>
                ))}</p>
                <p>Price: Kshs {shoe.price}</p>
            </div>
        </>        
    )
}

export default DisplayComponent