import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ComplaintContext } from "../context/ComplaintContext";
import Cards from "../components/Cards";

function DataPengaduan() {
  const { data } = useContext(ComplaintContext);
  const cities = Array.from(new Set(data.map((item) => item.kota)));

  return (
    <Container fluid className="my-3 height">
      <h1 className="mb-5 text-center">Data Pengaduan</h1>
      <Row className="mx-5">
        {cities.map((city) => (
          <Col key={city} xs={12} md={4} lg={3}>
            <Cards city={city} data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DataPengaduan;
