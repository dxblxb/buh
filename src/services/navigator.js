import { useDispatch } from 'react-redux';
import { addOpenFrameAction, setActiveFrameAction } from '../store/openFrameReducer';


    
export const addOpenFrame =(data) => {
        const dispatch = useDispatch()
        const frame = {
            name: data.name,
            id: Date.now(),
            type: data.type,
        }
        dispatch(addOpenFrameAction(frame))
        dispatch(setActiveFrameAction(frame.id))
        return true
    }