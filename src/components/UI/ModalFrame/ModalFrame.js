import css from './ModalFrame.module.css'
const ModalFrame = (props) =>{
    return (<div className={css.wrapper}>
        <div className={css.content}>
            <div onClick={() =>props.close()} className={css.closebutton}>X</div>
            {props.children}
        </div>
    </div>)
}

export default ModalFrame;