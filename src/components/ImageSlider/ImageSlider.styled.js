import styled from "styled-components"

export const SliderContainer = styled.div`
  height: 280px;
  width: 500px;
  position: relative;
  margin: 0 auto;
`
export const Slider = styled.div`
  height: 100%;
  position: relative;
`

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const Btn = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 1.5rem;
  z-index: 5;
  cursor: pointer;
`

export const PrevBtn = styled(Btn)`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translate(0, -50%);
`
export const NextBtn = styled(Btn)`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translate(0, -50%);
`

export const ImageList = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  gap: 4px;
  margin-top: 4px;

  li {
    height: 3rem;
    width: 100%;

    button {
      border: none;
      background: transparent;
      cursor: pointer;
      height: inherit;
      display: flex;
      width: 100%;

      img {
        height: inherit;
        width: 100%;
        object-fit: fill;
      }
    }
  }
`
