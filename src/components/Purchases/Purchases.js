import DocumentsJournalList from "../DocumentsJournalList/DocumentsJournaList";
import DocumentsJournalHeader from "../DocumentsJournalHeader/DocumentsJournaHeader";

const Purchases = () => {
    return (
            <div className=''>
                <div>Закупки</div>
                <DocumentsJournalHeader/>
                <DocumentsJournalList type={'purchases'}/>
            </div>
    )
}
export default Purchases;