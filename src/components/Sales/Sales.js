import DocumentsJournalList from "../DocumentsJournalList/DocumentsJournaList";
import DocumentsJournalHeader from "../DocumentsJournalHeader/DocumentsJournaHeader";

const Sales = () => {
    return (
            <div className=''>
                <div>Продажи</div>
                <DocumentsJournalHeader/>
                <DocumentsJournalList type={'sales'}/>
            </div>
    )
}
export default Sales;