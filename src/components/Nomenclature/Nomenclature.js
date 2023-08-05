import { useState } from "react";
import css from "./Nomenclature.module.css";
import { useQuery } from "react-query";
import { getData } from "../../services/getData";
import CatElement from "../CatElement/CatElement";
import { useDispatch, useSelector } from "react-redux";
const Nomenclature = () => {
  const [activeRow, setactiveRow] = useState(0);

  const filterCat = useSelector((state) => state.catFilter.filterCat);
  const { isLoading, error, data } = useQuery({
    queryFn: () =>
      getData({
        nomenclature: "all",
        cats: filterCat,
      }),
    queryKey: ["nomenclature", filterCat],
  });

  const cat = useQuery({
    queryFn: () =>
      getData({
        cat: "all",
      }),
    queryKey: ["cat"],
  });
  const onClickHandler = (id) => {
    setactiveRow(id);
  };
  const onContextMenuHandler = (e, id) => {
    setactiveRow(id);
    e.preventDefault();
    console.log("Context menu open");
  };
  return (
    <div className={css.nomeclatuer}>
      Номенкалатура
      <div>header</div>
      <div className={css.content}>
        <div className={css.content__wrapper}>
          <div className={css.table}>
            <div className={css.table__header}>
              <div style={{ maxWidth: "100px" }} className={css.item}>
                Код
              </div>
              <div className={css.item}>Наименование</div>
              <div style={{ maxWidth: "100px" }} className={css.item}>
                Цена
              </div>
              <div style={{ maxWidth: "100px" }} className={css.item}>
                В наличии
              </div>
            </div>
            <div className={css.table__body}>
              {isLoading ? (
                <div>Загрузка...</div>
              ) : (
                data.data.map((row, index) => (
                  <div
                    key={index}
                    onClick={() => onClickHandler(row.id)}
                    className={[
                      css.table__row,
                      activeRow === row.id ? css.active : "",
                    ].join(" ")}
                    onContextMenu={(e) => {
                      onContextMenuHandler(e, row.id);
                    }}
                  >
                    <div
                      style={{ maxWidth: "100px" }}
                      className={[css.item, css.item__align_right].join(" ")}
                    >
                      {row.id}
                    </div>
                    <div className={[css.item].join(" ")}>{row.name}</div>
                    <div
                      style={{ maxWidth: "100px" }}
                      className={[css.item, css.item__align_right].join(" ")}
                    >
                      {row.price}
                    </div>
                    <div
                      style={{ maxWidth: "100px" }}
                      className={[css.item, css.item__align_right].join(" ")}
                    >
                      {row.amount}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className={css.tree}>
            <div>
              {cat.isLoading ? (
                <div>Загрузка...</div>
              ) : (
                cat.data.data.length > 0 && (
                  <CatElement elements={cat.data.data} id={0} />
                )
              )}
            </div>
          </div>
        </div>
        <div>footer</div>
      </div>
    </div>
  );
};

export default Nomenclature;
