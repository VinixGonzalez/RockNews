import React from 'react';
import CardNoticia from '../../CardNoticia';
import { api, API_KEY } from '../../../api/config.js';

class Ciencias extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            listaNoticias: [],


        }

    }

    componentDidMount() {
        api.get(`/top-headlines?country=br&category=science&apiKey=${API_KEY}`)
            .then(res => {
                if (res.status === 200)
                    this.setState({ listaNoticias: res.data.articles });
            });
    }

    render() {

        const { listaNoticias } = this.state;

        return (
            <div>
                <h1 className="text-center m-3">Ciências</h1>

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


export default Ciencias;