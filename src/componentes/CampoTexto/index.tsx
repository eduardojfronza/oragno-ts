import './CampoTexto.css'

interface CampoTextoPros {
     aoAlterado:(valor: string) => void
     // por ser uma função que recebe algo e não retorna nada fizemos dessa maneira
     placeholder: string
     label: string
     valor: string
     obrigatorio: boolean

     
}

const CampoTexto = ({ aoAlterado, label,obrigatorio, placeholder, valor}:CampoTextoPros) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }
    // É necessário utilizar o tipo React.ChangeEvent<HTMLInputElement>  para garantir que o parâmetro evento seja do tipo correto, contendo as propriedades específicas de um elemento de entrada de texto.

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
            value={valor} 
            onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto