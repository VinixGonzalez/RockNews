import React from 'react';
import { api, API_KEY } from '../../../api/config.js';
import CardNoticia from '../../CardNoticia';

class Busca extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listaNoticias: [],
        }

    }

    componentDidMount() {
        const { match: { params: { termo } } } = this.props;

        api.get(`/everything?q=${termo}&language=pt&apiKey=${API_KEY}`)
            .then(res => {
                if (res.status === 200)
                    this.setState({ listaNoticias: res.data.articles });
            });
    }

    componentDidUpdate(prevProps) {

        const ultimoTermo = prevProps.match.params.termo;
        const novoTermo = this.props.match.params.termo;

        if (ultimoTermo !== novoTermo)
            api.get(`/everything?q=${novoTermo}&language=pt&apiKey=${API_KEY}`)
                .then(res => {
                    if (res.status === 200)
                        this.setState({ listaNoticias: res.data.articles });
                });
    }

    render() {

        const { listaNoticias } = this.state;

        return (
            <div>
                <h1 className="text-center mt-3">{this.props.match.params.termo}</h1>

                <div className="containerNews" >

                    {
                        listaNoticias.length > 0 ?
                            listaNoticias.map(noticia => <CardNoticia noticia={noticia} />)
                            :
                            <div className="m-5">
                                <span>Carregando...</span>
                            </div>
                    }

                </div>
            </div>
        )
    }
}


export default Busca;