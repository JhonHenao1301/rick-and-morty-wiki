
import styled from 'styled-components'
import Selector from './selector'

const FiltersStyled = styled.div`
    /* border: 1px solid red; */
    .filter-clear {
        display: flex;
        justify-content: center;
    }
    .btn-link {
        text-decoration: none;
    }
`

function Filters({ setStatus, setSpecies, setGender }) {
    function handleClick() {
        setStatus('')
        setSpecies('')
        setGender('')
        window.location.reload(false)
    }
    return (
        <FiltersStyled>
            <div className="filter-clear">
                <button type="button" className="btn btn-primary btn-clear mb-3" onClick={handleClick}>Clear filters</button>
            </div>
            <div id="accordion">
                <div className="card">
                    <div className="card-header px-0" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Status
                            </button>
                        </h5>
                    </div>
                    <Selector className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" defaultValue="" setStatus={setStatus}>
                        <option value="">All</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </Selector>
                </div>
                <div className="card">
                    <div className="card-header px-0" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Species
                            </button>
                        </h5>
                    </div>
                    <Selector className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" defaultValue="" setSpecies={setSpecies}>
                        <option value="">All</option>
                        <option value="human">Human</option>
                        <option value="alien">Alien</option>
                        <option value="humanoid">Humanoid</option>
                        <option value="poopybutthole">Poopybutthole</option>
                        <option value="mythological">Mythological</option>
                        <option value="animal">Animal</option>
                        <option value="disease">Disease</option>
                    </Selector>
                </div>
                <div className="card">
                    <div className="card-header px-0" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Gender
                            </button>
                        </h5>
                    </div>
                    <Selector className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" defaultValue="" setGender={setGender}>
                        <option value="">All</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="unknown">Unknown</option>
                        <option value="genderless">Genderless</option>
                    </Selector>
                </div>
            </div>
        </FiltersStyled>
    )
}

export default Filters
