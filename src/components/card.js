
import styled from 'styled-components'

const CardStyled = styled.div`
    .card-img-top {
        position: relative;
        block-size: auto;
        inline-size: 100%;
    }
    .position-absolute {
        top: 10px;
        right: 10px;
        font: var(--body-semi-bold);
        color: var(--white);
        padding-inline: .5rem;
        padding-block: .25rem;
        border-radius: .5rem;
    }
`

const status = {
    alive: {
        color: 'bg-success position-absolute'
    },
    dead: {
        color: 'bg-danger position-absolute'
    },
    unknown: {
        color: 'bg-secondary position-absolute'
    }
}

function Card(props) {
    const formattedName = props.status.toLowerCase()
    const color = status[formattedName] ? status[formattedName].color : 'white'
    return (
        <CardStyled>
            <div className="card">
                <img className="card-img-top" src={props.image} alt=" footage card" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.location.name}</p>
                </div>
                <span className={color}>{props.status}</span>
            </div>

        </CardStyled>
    )
}

export default Card
