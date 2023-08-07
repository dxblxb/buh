import { useDispatch } from "react-redux";
import css from "./NavbarItem.module.css";
// import { addOpenFrame } from "../../services/navigator";
import {
  addOpenFrameAction,
  setActiveFrameAction,
} from "../../store/openFrameReducer";

const NavbarItem = (props) => {
  const dispatch = useDispatch();

  const addOpenFrame = () => {
    const frame = {
      name: props.name,
      id: Date.now(),
      type: props.type,
    };
    dispatch(addOpenFrameAction(frame));
    dispatch(setActiveFrameAction(frame.id));
  };
  return (
    <div>
      <p className={css.item} onClick={() => addOpenFrame()}>
        {props.name}
      </p>
    </div>
  );
};
export default NavbarItem;
