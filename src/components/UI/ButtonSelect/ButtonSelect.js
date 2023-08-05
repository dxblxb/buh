import React, { useEffect, useState } from 'react';
import ButtonList from '../ButtonList/ButtonList';
import css from './ButtonSelect.module.css'
import v from './v.png';


const ButtunSelect = (props) => {
    const [active, setActive] = useState(false)

    const buttonClickHander1 = () => {
        setActive(!active)
        // console.log(active)
    }
    const buttonClickHander2 = () => {
        props.onClickAction()
    }
    return (
        <div onClick={props.select ? buttonClickHander1 :buttonClickHander2} className={css.button}>
            {props.children}
            {props.select &&
                <img className={css.v} src={v} alt="Close" />
            }
            {props.select &&

                <ButtonList active={active} list={
                    ['Товарный чек',
                        'Акт об оказании усслуг',
                        'Счет на оплату'
                    ]} />
            }
        </div>
    )
}
export default ButtunSelect;