import { IColaborador } from '../../compartilhado/interfaces/IColaborador'
import Colaborador from '../Colaborador'
import './Time.css'

interface TimeProps{
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: IColaborador[]
    // os [] são para identificar que é um array e poder usar o .map ou . filter por exemplo.
}

const Time = (props:TimeProps) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {/* colaboradores é uma lista de 'objetos' */}
                {props.colaboradores.map(colaborador => <Colaborador
                    corDeFundo={props.corPrimaria}
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} />)}
            </div>
        </section>
            : ''
    )
}

export default Time