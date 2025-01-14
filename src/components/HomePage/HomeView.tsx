import { Card, Container } from "react-bootstrap";

function HomeView() {
    return(
        <>
            <section>
                <Container>
                    <div>
                        <Card>
                            <Card.Body className="d-flex align-items-center justify-content-center min-vh-100">
                                <h2>HOME</h2>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default HomeView;