import { Accordion, Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import '../AssetPage/AssetView.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AssetView() {
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
                <label style={myStyle}><u>Asset</u></label>
                <section>
                    <Card>
                        <Card.Body>
                            <form>
                                <Row>
                                    <Col>
                                        <div className="col-sm-6">
                                            <Form.Group>
                                                <Form.Select>
                                                    <option selected disabled>Jenis Aset</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Select>
                                                    <option selected disabled>Tipe Aset</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Control placeholder="Biaya Sewa" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="col-sm-6">
                                            <Form.Group>
                                                <Form.Control placeholder="Biaya Sewa" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Select>
                                                    <option selected disabled>Kondisi</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6" style={marginForm}>
                                            <Form.Group>
                                                <Form.Select>
                                                    <option selected disabled>Jangka Menit/Jam/Hari</option>
                                                </Form.Select>
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
                                    <FontAwesomeIcon size="sm" icon="fa-regular fa-floppy-disk" />
                                    {' '}Save
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
                                                <Form.Control placeholder="Kode Aset" type="text"></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-3">
                                            <Form.Group>
                                                <Form.Select>
                                                    <option selected disabled>Kondisi</option>
                                                </Form.Select>
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
                                <th>Jenis Aset</th>
                                <th>Tipe Aset</th>
                                <th>Kode Aset</th>
                                <th>Kondisi</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mobil</td>
                                <td>Skyline GTR</td>
                                <td>B 1234 AB</td>
                                <td>Baik</td>
                                <td><Button variant="warning">Edit</Button></td>
                            </tr>
                            <tr>
                                <td>Motor</td>
                                <td>Supra</td>
                                <td>B 1235 CB</td>
                                <td>Disewa</td>
                                <td><Button variant="warning">Edit</Button></td>
                            </tr>
                            <tr>
                                <td>Sepeda</td>
                                <td>Wim Cycle</td>
                                <td>B 1236 DB</td>
                                <td>Sedang Diperbaiki</td>
                                <td><Button variant="warning">Edit</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </section>
            </Container>
        </>
    )
}

export default AssetView;