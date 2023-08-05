import { useState } from "react";
import DocListItem from "../DocListRows/DocListRows";
import { useQuery } from "react-query";
import { getData } from "../../services/getData";


const DocumentsJournalList = (props) => {
    const [activeItem, setActiveItem] = useState(0);

    const clikItemHandler = (index) => {
        setActiveItem(index)
    }
    const dblClickHandler = (index) =>{
        console.log('Двыойное нажатие: ' +index)
    }

    const {isLoading, error, data } = useQuery({
        queryFn: () => getData({
            docs: props.type,
        }),
        queryKey: ['docs'],
    })

    if(isLoading)
        return (<div>Загрузка...</div>)
    if(error === null)
    return (
        <div className=''>
            {data.data.map((row, index) =>
                <DocListItem 
                row ={row}
                key = {index}
                onClick={() => clikItemHandler(index)} 
                onDoubleClick={() => dblClickHandler(index)}
                active = {activeItem===index ? true : false} 
                />
            )}
        </div>
    )
    return(
        <div>Error</div>
    )
}
export default DocumentsJournalList;