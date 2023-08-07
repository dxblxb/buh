import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getData } from "../../services/getData";

const NomenclatureItem = (props) => {
  const active = useSelector((state) => state.openFrame.active);
  const cat = useQuery({
    queryFn: () =>
      getData({
        nomitem: props.id,
      }),
    queryKey: ["nomitem", active],
  });
  return (
    <div>
      {cat.isLoading && <div>Загрузка ...</div>}
      {cat.isSuccess && <div>{cat.data.data[1]}</div>}
    </div>
  );
};
export default NomenclatureItem;
