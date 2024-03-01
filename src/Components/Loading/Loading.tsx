import "./Loading.scss";
import Icon from "../../asset/img/loading.png"
export default function Loading() {
  return (
    <div className="loading_container">
      <img className="rotating-image" src={Icon} />
    </div>
  );
}
