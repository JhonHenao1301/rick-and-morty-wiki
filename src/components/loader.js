
import styled from 'styled-components'

const LoaderStyled = styled.div`
grid-area: item-list;
display: grid;
place-items: center;
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 36px;
  height: 36px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #000;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
`

function Loader() {
    return (
        <LoaderStyled>
            <div className="lds-ripple">
                <div></div><div></div>
            </div>
        </LoaderStyled>
    )
}

export default Loader
