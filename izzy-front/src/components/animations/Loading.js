import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="loading-spinner">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
