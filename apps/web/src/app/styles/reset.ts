import { createGlobalStyle } from 'styled-components';

export const GlobalResetCSS = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-repeat: no-repeat;
  }

  * {
    padding: 0;
    margin: 0;
  }

  html {
        -webkit-text-size-adjust: none;
    text-size-adjust: none;
    line-height: 1.4;
    font-size: 10px;
    -webkit-font-smoothing: antialiased;
        block-size: 100%;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  body{
    min-block-size: 100%;
    font-size: 1.6rem;
     background-color: #f0f0f0;
  }

  body, html, svg, #root {
    width: 100%;
    height: 100%;
  }

  svg {
    color: inherit;
    fill: inherit;
  }

  button {
    border: 0;
    background: none;
  }

  a {
    text-decoration: none;
  }

  img,
  iframe,
  audio,
  video,
  canvas {
    display: block;
    max-inline-size: 100%;
    block-size: auto;
  }

  svg {
    max-inline-size: 100%;
  }

  button, a {
    cursor: pointer;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  textarea {
    resize: vertical;
  }

  fieldset,
  iframe {
    border: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  p {
    text-wrap: pretty;
    font-variant-numeric: proportional-nums;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-variant-numeric: lining-nums;
  }

  p,
    blockquote,
    q,
    figcaption,
    li {
        hanging-punctuation: first allow-end last;
    }

  input,
  label,
  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
        line-height: 1.1;
    }

  math,
  time,
  table {
    font-variant-numeric: tabular-nums lining-nums slashed-zero;
  }

  code {
    font-variant-numeric: slashed-zero;
  }

  table {
    border-collapse: collapse;
  }

  abbr {
    font-variant-caps: all-small-caps;
    text-decoration: none;

    &[title] {
      cursor: help;
      text-decoration: underline dotted;
    }
  }

  sup,
  sub {
    line-height: 0;
  }

  :disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  :focus-visible {
    outline-offset: 0.2rem;
  }

`;
