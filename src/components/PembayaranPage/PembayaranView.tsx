import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import '../PembayaranPage/PembayaranView.css';

function PembayaranView() {
    const myStyle = {
        marginTop: "2em",
        fontSize: "20px"
    }

    const marginForm = {
        marginTop: "20px"
    }

    return (
        <> 
            <Container>
                <label style={myStyle}><u>Pembayaran</u></label>
                <section>
                    <Card>
                        <Card.Body>
                            <form>
                                <Row>
                                    <Col>
                                        <div className="col-sm-6">
                                            <Form.Group>
                                                <Form.Control placeholder="No. Transaksi" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Control disabled placeholder="Tanggal Sewa" type="date"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Control disabled placeholder="Kelebihan Waktu" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Control disabled placeholder="No. Identitas" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Control disabled placeholder="Jenis Aset" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Control disabled placeholder="Kode Aset" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="col-sm-6">
                                            <Form.Group>
                                                <Form.Control disabled placeholder="DP" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Control disabled placeholder="Tanggal Kembali" type="date"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Control disabled placeholder="Denda" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Control disabled placeholder="Nama Penyewa" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Control disabled placeholder="Tipe Aset" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Control disabled placeholder="Biaya Sewa" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </Card.Body>
                        <Card.Footer className="text-end">
                            <div>
                                <Button
                                variant="success"
                                title="Save">
                                    <FontAwesomeIcon size="sm" icon="fa-solid fa-circle-check" />
                                    {' '}Selesai
                                </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </section>

                <br/>

                <section>
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <b>Pencarian</b>
                            </Accordion.Header>
                            <Accordion.Body>
                                <form>
                                    <Row>
                                        <div className="col-sm-3">
                                            <Form.Group>
                                                <Form.Control placeholder="No. Transaksi" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-3">
                                            <Form.Group>
                                                <Form.Select>
                                                    <option selected disabled>Jenis Aset</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-3">
                                            <Form.Group>
                                                <Form.Select>
                                                    <option selected disabled>Tipe Aset</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-3">
                                            <Form.Group>
                                                <Form.Select>
                                                    <option selected disabled>Kode Aset</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <div className="col-sm-3">
                                            <Form.Group>
                                                <Form.Control placeholder="Nama" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-3">
                                            <Form.Group>
                                                <Form.Control placeholder="No. Identitas" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-3">
                                            <Form.Group>
                                                <Form.Control placeholder="Tanggal Sewa" type="date"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-3">
                                            <Form.Group>
                                                <Form.Control placeholder="Tanggal Kembali" type="date"></Form.Control>
                                            </Form.Group>
                                        </div>
                                    </Row>
                                    <br/>
                                    <Col className="text-end">
                                        <Button className="col-sm-1 mx-3" variant="secondary">
                                            <FontAwesomeIcon size="sm" icon="fa-solid fa-broom" />
                                            {' '}Clear
                                        </Button>
                                        <Button className="col-sm-1" variant="info">
                                            <FontAwesomeIcon size="sm" icon="fa-solid fa-magnifying-glass" />
                                            {' '} Cari
                                        </Button>
                                    </Col>
                                </form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>No. Transaksi</th>
                                <th>Tanggal Sewa</th>
                                <th>Tanggal Kembali</th>
                                <th>Sisa Waktu</th>
                                <th>Nama Penyewa</th>
                                <th>Alamat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mobil</td>
                                <td>123123</td>
                                <td>12/01/2024</td>
                                <td>13/01/2024</td>
                                <td>00:12:00</td>
                                <td>Abidin</td>
                                <td>Jl. H Midi</td>
                            </tr>
                            <tr>
                                <td>Motor</td>
                                <td>124151</td>
                                <td>15/01/2024</td>
                                <td>17/01/2024</td>
                                <td>00:12:00</td>
                                <td>Umar</td>
                                <td>Sudirman</td>
                            </tr>
                            <tr>
                                <td>Sepeda</td>
                                <td>12515</td>
                                <td>02/01/2024</td>
                                <td>05/01/2024</td>
                                <td>00:12:00</td>
                                <td>Asep</td>
                                <td>Pondok Indah</td>
                            </tr>
                        </tbody>
                    </Table>
                </section>
            </Container>
        </>
    )
}

export default PembayaranView;