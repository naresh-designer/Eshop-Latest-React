import styled from "styled-components";

const Button = styled.button`
            background-color:${({theme}) => theme.common.orangeColor };
            border:1px solid ${({theme}) => theme.common.orangeColor };
            padding:10px 20px;
            color:${({theme}) => theme.common.whiteColor };
            transition:all .5s;
            display:inline-flex;
            margin-block:30px;
            cursor:pointer;
            font-family:${({theme})=>theme.common.merriweatherFont};
            font-size:17px;
            text-transform:lowercase;

            &:hover{
                background-color:transparent;
                border:1px solid ${({theme}) => theme.common.orangeColor };
                color:${({theme}) => theme.common.blackColor };
                scale:.95;
            }
`

export default Button