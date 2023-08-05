import { useSelector } from "react-redux";
import Sales from "../Sales/Sales";
import MainFrame from "../MainFrame/MainFrame";
import Purchases from "../Purchases/Purchases";
import DocSales from "../DocSales/DocSales";
import Nomenclature from "../Nomenclature/Nomenclature";

const Content = () => {
    const active = useSelector(state => state.openFrame.active)
    const frames = useSelector(state => state.openFrame.opened)
    let frame = <MainFrame />
    if (frames.length !== 0) {
        const openFrame = frames.filter(opened => opened.id === active)[0].type

        if (openFrame === 'SALES'){
            frame = <Sales id="1" />
        }
        if (openFrame === 'PURCHASES'){
            frame = <Purchases id="2" />
        }

        if (openFrame === 'NEWSALES'){
            frame = <DocSales id="2" />
        }
        if (openFrame === 'NOMENCLATURE'){
            frame = <Nomenclature id="2" />
        }
    } 
    return (
        <div className='content'>
            {frame}
        </div>
    )
}
export default Content;