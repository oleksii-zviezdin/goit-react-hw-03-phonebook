import styled from '@emotion/styled'

export const Form = styled.form`

outline: 1px solid #0460f5;
border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    margin-right: auto;
    margin-left: auto;
    
    box-shadow: 0 0 8px 2px #6279ff94;
`
export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Span = styled.span`
    margin-right: 6px;
    font-weight: 600;
`
export const Input = styled.input`
    border: none;
    height: 24px;
    background-color: #6279ff;
    &:focus {
        outline: 1px solid #0460f5;
        box-shadow: 0 0 8px 3px #6279ff94;
        
    }
`
export const AddButton = styled.button`
    width: 150px;
    height: 32px;
    
    user-select: none;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
    border: none;

    background-color: #0460f5;
    color:rgb(18, 8, 42);
    font-weight: 600;
    cursor: pointer;
    transition: background-color 250ms, box-shadow 250ms;

    &:hover,
    &:focus {
        background-color: #2170ef;
        box-shadow: 0 0 8px 2px #6279ff;
    }

    input:invalid & {
        color:rgb(52, 44, 206);
    }
`