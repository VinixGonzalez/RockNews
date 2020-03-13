import React, { Component } from 'react'
import { Card, Button, Badge } from 'react-bootstrap';

import './styles.css';

export default class CardNoticia extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        const { noticia } = this.props;

        return (
            <Card className="m-4 shadow grow" style={{ width: '25rem' }}>

                <Card.Img loading={true} variant="top" src={noticia.urlToImage} alt="Imagem da notícia" />

                <Card.Body>

                    <Card.Title>{noticia.title}</Card.Title>

                    <Card.Text>
                        {noticia.description}...
                    </Card.Text>

                    <Button variant="dark" >
                        <a href={noticia.url} target="_blank" className="text-decoration-none text-white">
                            Ler notícia completa
                        </a>
                    </Button>

                    <div className="mt-5 d-flex justify-content-between">
                        <Badge variant="dark">{`${new Date(noticia.publishedAt).toLocaleDateString()} - ${new Date(noticia.publishedAt).toLocaleTimeString()}`}</Badge>
                        <Badge variant="dark">{noticia.source.name}</Badge>
                    </div>

                </Card.Body>

            </Card>
        )
    }
}
