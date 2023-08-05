import css from './ButtonList.module.css'
const clickItem = (index) => {
    console.log(index);
}
const ButtonList = (props) => {
    return (
        <div className={css.dropdown}>
            <div 
            className={
                [css.dropdown__content, props.active ? css.active : ''].join(' ')}>
                {
                    props.list.map((item, index) =>
                        <div onClick={()=>clickItem(item)} key={index} >{item}</div>
                    )
                }
            </div>
        </div>
    )
}
export default ButtonList;