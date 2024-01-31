import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import './Burger.css'

const Burger = (props) => {
    return (
        <div className='Burger'>
            <BurgerIngredients type='bread-top' />
            <BurgerIngredients type='salad' />
            <BurgerIngredients type='bacon' />
            <BurgerIngredients type='meat' />
            <BurgerIngredients type='cheese' />
            <BurgerIngredients type='bread-bottom' />
        </div>
    )
}

export default Burger