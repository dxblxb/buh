import { useSelector } from "react-redux";
import Sales from "../Sales/Sales";
import MainFrame from "../MainFrame/MainFrame";
import Purchases from "../Purchases/Purchases";
import DocSales from "../DocSales/DocSales";
import Nomenclature from "../Nomenclature/Nomenclature";
import NomenclatureItem from "../NomenclatureItem/NomenclatureItem";

const Content = () => {
  const active = useSelector((state) => state.openFrame.active);
  const frames = useSelector((state) => state.openFrame.opened);
  let frame = <MainFrame />;
  if (frames.length !== 0) {
    const openFrame = frames.filter((opened) => opened.id === active);

    if (openFrame[0].type === "SALES") {
      frame = <Sales id="1" />;
    }
    if (openFrame[0].type === "PURCHASES") {
      frame = <Purchases id="2" />;
    }

    if (openFrame[0].type === "NEWSALES") {
      frame = <DocSales id="2" />;
    }
    if (openFrame[0].type === "NOMENCLATURE") {
      frame = <Nomenclature id="2" />;
    }
    if (openFrame[0].type === "NOMENCLATUREITEM") {
      frame = <NomenclatureItem id={openFrame[0].nomid} />;
    }
  }
  return <div className="content">{frame}</div>;
};
export default Content;
