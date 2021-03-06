import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
      border: 0;
      font: inherit;
      line-height: 1;
      margin: 0;
      padding: 0;
      vertical-align: baseline;
   }
   article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block;
   }
   html {
      box-sizing: border-box;
      font-size: 10px;
   }
   *, *:before, *:after {
      box-sizing: inherit;
   }
   body {
      border: 0;
      color: #000;
      font-family: 'Roboto', Arial, Helvetica, sans-serif;
      font-size: 1.6rem;
      margin: 0;
      padding: 0;
   }

   ol, ul {
      list-style: none;
   }

   body::-webkit-scrollbar {
      display: none;
   }
   blockquote, q {
      quotes: none;
   }
   blockquote:before, blockquote:after, q:before, q:after {
      content: '';
      content: none;
   }
   table {
      border-collapse: collapse;
      border-spacing: 0;
   }
   strong {
      font-weight: bold;
   }
   em {
      font-style: italic;
   }
   a {
      color: #393939;
      text-decoration: none;
   }
   u {
      text-decoration: underline;
   }

   input[disabled] {
      opacity: .6;
   }

   input[disabled]:hover {
      cursor: not-allowed;
      opacity: .6;
   }

   input[disabled] {
      opacity: .6;
   }

   input[disabled]:hover {
      cursor: not-allowed;
      opacity: .6;
   }
   :root {
      --main: #182094;
      --other: #188c94;   
   }
`;