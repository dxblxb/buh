import { useState } from "react";
import ModalNomenclature from "../ModalNomenclature/ModalNomenclature";
import ButtunSelect from "../UI/ButtonSelect/ButtonSelect";
import css from "./DocSales.module.css";

const DocSales = () => {
  const [openModal, setOpenModal] = useState(false);
  const selectionHendler = () => {
    setOpenModal(true);
    console.log("selectionHendler");
  };
  return (
    <div className="">
      <div>Новый документ</div>
      <div className={css.header}>
        <ButtunSelect>Провести и закрыть</ButtunSelect>
        <ButtunSelect>Сохранить</ButtunSelect>
        <ButtunSelect>Провести</ButtunSelect>
        <ButtunSelect select={true}>Печать</ButtunSelect>
      </div>
      <div className={css.table}>
        <div className={css.table__header}>
          <div className={css.table__button}>
            <ButtunSelect>Добавить</ButtunSelect>
            <ButtunSelect onClickAction={selectionHendler}>
              Подобрать товары
            </ButtunSelect>
          </div>
          <div className={css.table__legend}></div>
        </div>
        <div className="table__body"></div>
      </div>
      {openModal && <ModalNomenclature />}
    </div>
  );
};

export default DocSales;
