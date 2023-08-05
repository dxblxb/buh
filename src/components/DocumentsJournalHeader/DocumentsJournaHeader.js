import { useSelector, useDispatch } from "react-redux";
import ButtunSelect from "../UI/ButtonSelect/ButtonSelect";
import css from './DocumentsJournalHeader.module.css'
import { addOpenFrameAction, setActiveFrameAction } from '../../store/openFrameReducer';

const DocumentsJournalHeader = () => {
    const active = useSelector(state => state.openFrame.active)
    const frames = useSelector(state => state.openFrame.opened)
    const dispatch = useDispatch()
    
    const create = () => {
        const frame = {
            name: 'Новый документ',
            id: Date.now(),
            type: 'NEWSALES',
        }
        dispatch(addOpenFrameAction(frame))
        dispatch(setActiveFrameAction(frame.id))
    }
    return (
        <div className={css.wrapper}>
            <div className="">
                <input />
            </div>
            <div className={css.button}>
                <ButtunSelect onClickAction={create}>Создать</ButtunSelect>
                <ButtunSelect>Период</ButtunSelect>
                <ButtunSelect select={true}>Печать</ButtunSelect>
            </div>
        </div>
    )
}
export default DocumentsJournalHeader;