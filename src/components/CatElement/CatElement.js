import { useDispatch } from "react-redux";
import { setFilterCatAction } from "../../store/catFilterReducer";
import css from "./CatElement.module.css";

const CatElement = (props) => {
  const dispatch = useDispatch();
  const currentElements = props.elements.filter((elem) => {
    return elem.parentId == props.id;
  });
  const elements = props.elements.filter((elem) => {
    return elem.parentId !== props.id;
  });
  const catClickHandler = (id) => {
    console.log(id);
    dispatch(setFilterCatAction(id));
  };
  return (
    <ul className={css.ul}>
      {currentElements.length > 0 &&
        currentElements.map((elem) => (
          <li className={css.li}>
            <div className={css.wrapper}>
              <input type="checkbox" />
              <div
                onClick={() => {
                  catClickHandler(elem.id);
                }}
                className={css.element}
                id={elem.id}
              >
                {elem.name}
              </div>
            </div>
            {elements.filter((el) => {
              return el.parentId === elem.id;
            }).length > 0 && (
              <CatElement key={elem.id} elements={elements} id={elem.id} />
            )}
          </li>
        ))}
    </ul>
  );
};

export default CatElement;
