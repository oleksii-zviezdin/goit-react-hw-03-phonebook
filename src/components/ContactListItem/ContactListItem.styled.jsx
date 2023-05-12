import styled from '@emotion/styled'

export const ContactItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 20px;

    outline: 1px solid #0460f5;
    border-radius: 8px;
    
    box-shadow: 0 0 8px 2px #6279ff94;
`
export const RemoveButton = styled.button`
    width: 150px;
    height: 32px;
    
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
`