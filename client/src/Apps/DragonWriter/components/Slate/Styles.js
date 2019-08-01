import styled from 'styled-components';

export const EditorWrapper = styled.div`
   align-self: center;
   /* background: #999999; */
   background: ${props => (
      props.published
         ? props.isDragging ? "rgba(255, 255, 255, 0.36)" : "rgba(255, 255, 255, 0.25)"
         : props.isDragging ? "rgba(22, 136, 130, 0.55)" : "rgba(22, 136, 130, 0.287)"
   )};
   border: 2px solid rgba(0,0,0,1);
   border-left: 1px solid ${props => (
      props.published ? "rgba(255, 255, 255, 0.183)" : "rgb(18, 110, 106)"
   )};
   border-top: 1px solid ${props => (
      props.published ? "rgba(255, 255, 255, 0.533)" : "rgb(22, 136, 130)"
   )};
   box-shadow: inset 0 0 30px 0px rgba(38, 212, 204, 0.267),
      inset 0 0 40px 5px #000,
      inset 0 0 20px 1px #000;
   margin: auto;
   padding: 20px 50px 40px 50px;
   position: relative;
   width: 100%;
`;

export const EditorStyles = styled.div`
   background: rgba(255, 255, 255, 0.4);
   border: 1px solid #000;
   border-left: 1px solid rgb(3,3,3);
   border-top: 1px solid rgb(3,3,3);
   border-right: 1px solid rgb(18, 110, 106);
   border-bottom: 1px solid rgb(22, 136, 130);
   box-shadow: inset 10px 10px 10px rgb(22,22,22);
   color: ${props => props.theme.black};
   cursor: text;
   flex-grow: 1;
   font-family: Arial, Helvetica, sans-serif;
   line-height: 1.4;
   height: 35vh;
   overflow: auto;
   padding: 4% 0;
   transition: background-color .2s ease-in-out;
   /* width: 100%; */
   > div:first-child {
      background: white;
      box-shadow: 8px 8px 6px #444;
      box-shadow: 9px 9px 9px rgb(22,22,22);
      width: 80%;
      min-height: 150vh;
      margin: auto;
      padding: 5% 10%;
   }
   p {
      font-size: 1.5rem;
      text-indent: 25px;
   }
   ul {
      margin-top: 0;
      padding-top: 0;
   }
`;

export const Header = styled.div`
   color: #fff;
   font-family: ${props => props.theme.hTypeface};
   font-size: 4rem;
   margin-bottom: 20px;
   text-align: center;
   text-shadow: 0 0 2px #000, 0 0 3px #111, 0 0 10px rgba(38, 212, 204, .7);
`;

export const MetaDataForm = styled.div`
   display: flex;
   position: inherit;
   width: 100%;
   margin: auto;
   div {
      width: 33.3%;
      padding: 0 10px;
   }
   div:first-child {
      padding: 0 20px 0 0;
   }
   div:nth-child(3) {
      padding: 0 0 0 20px;
   }
   label {
      color: #fff;
      text-shadow: 0 0 2px #000, 0 0 3px #111, 0 0 10px rgba(38, 212, 204, .7);
   }
   input, select {
      border-color: rgba(38, 212, 204, .6);
      width: 100%;
   }
`;

export const OuterContainer = styled.div`
   background: transparent;
   display: flex;
   height: 100%;
   padding-left: 200px;
   width: calc(100% - 200px);
`;