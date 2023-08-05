import css from './DocListRows.module.css';

const DocListRows = (props) => {
    return (
            <div {...props} className={[css.wrapper, props.active ? css.active : ''].join(' ') }>
                <div className={css.item }>{props.row.state}</div>
                <div className={css.item}>{props.row.number}</div>
                <div className={css.item}>{props.row.type}</div>
                <div className={css.item}>{props.row.sum}</div>
                <div className={css.item}>{props.row.point}</div>
                <div className={css.item}>{props.row.manager}</div>
            </div>
    )
}
export default DocListRows;