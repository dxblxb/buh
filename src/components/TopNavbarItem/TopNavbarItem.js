import x from './x.png';
import css from './TopNavbarItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeOpenFrameAction, setActiveFrameAction } from '../../store/openFrameReducer';

const TopNavbarItem = (props) => {
    const dispatch = useDispatch()
    const active = useSelector(state => state.openFrame.active)
    const openedFrame = useSelector(state => state.openFrame.opened)
    const removeOpenFrame = () => {
        dispatch(removeOpenFrameAction(props.id))
        if (active === props.id) {
            const newFrameActive = openedFrame.filter(open => open.id !== props.id).at(-1)
            if (newFrameActive !== undefined) {
                dispatch(setActiveFrameAction(newFrameActive.id))
            } else {
                dispatch(setActiveFrameAction(0))
            }
        }


    }
    return (
        <div
            onClick={() => dispatch(setActiveFrameAction(props.id))}
            className={[css.item, active === props.id ? css.active : ''].join(' ')}>
            <div className={css.content} >{props.name}</div>
            <div
                onClick={(e) => e.stopPropagation()}
                className={css.x__wrapper}
            >
                <img onClick={() => removeOpenFrame()} className={css.x} src={x} alt="Close" />
            </div>
        </div>
    )
}
export default TopNavbarItem;