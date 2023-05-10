
import styled from 'styled-components'
import Selector from './selector'

const FiltersOthersStyled = styled.div`
    grid-area: filters;
`

function FiltersOthers({setId, total, module}) {
    return (
        <FiltersOthersStyled>
            <h1 className='text-center'>Pick {module}</h1>
            <div className="input-group mt-3 mb-3">
                <Selector className="form-select" id="inputGroupSelect01" setId={setId}>
                    <option value={1}>{module}...</option>
                    {[...Array(total).keys()].map((item, index) => {
                        return <option value={item+1} key={index}>{module} - {item+1}</option>
                    })}
                </Selector>
            </div>
        </FiltersOthersStyled>
    )
}

export default FiltersOthers
