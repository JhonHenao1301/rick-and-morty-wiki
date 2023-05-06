
import styled from 'styled-components'

const FiltersStyled = styled.div`
    border: 1px solid red;
    .card-body {
    }
`

function Filters() {
    return (
        <FiltersStyled>
            <div id="accordion">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Status
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            <button type="button" className="btn btn-outline-primary">Alive</button>
                            <button type="button" className="btn btn-outline-primary">Dead</button>
                            <button type="button" className="btn btn-outline-primary">Unknown</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Species
                        </button>
                    </h5>
                    </div>
                    <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            <button type="button" className="btn btn-outline-primary">Human</button>
                            <button type="button" className="btn btn-outline-primary">Alien</button>
                            <button type="button" className="btn btn-outline-primary">Humanoid</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Gender
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                            <button type="button" className="btn btn-outline-primary">Female</button>
                            <button type="button" className="btn btn-outline-primary">Male</button>
                            <button type="button" className="btn btn-outline-primary">Unknown</button>
                        </div>
                    </div>
                </div>
            </div>
        </FiltersStyled>
    )
}

export default Filters
