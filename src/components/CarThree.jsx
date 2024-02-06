import React from 'react' 
const CarThree = (props) => {
    const {brand, model, year} = props
    return(
        <>
            The {year} {brand} {model} just shipped in
        </>
    )
}
export default CarThree