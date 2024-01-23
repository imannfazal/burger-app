import React from 'react'
import "BurgerIngredients.css"
import PropTypes from 'prop-types';

const BurgerIngredients = (props) => {
    let ingredient = null;
    switch (props.type) {
        case ("bread-bottom"):
            ingredient = <div className='BreadBottom'></div>
            break;
        case ("bread-top"):
            ingredient = <div className='BreadTop'>
                <div className='Seeds1'></div>
                <div className='seeds2'></div>
            </div>
            break;
        case ("meat"):
            ingredient = <div className='Meat'></div>
            break;
        case ("cheese"):
            ingredient = <div className='Cheese'></div>
            break;
        case ("salad"):
            ingredient = <div className='Salad'></div>
            break;
        case ("bacon"):
            ingredient = <div className='Bacom'></div>
            break;
        default:
            ingredient=null;

    }
    return ingredient;
}

BurgerIngredients.propTypes={
    type: PropTypes.string.isRequired
}

export default BurgerIngredients