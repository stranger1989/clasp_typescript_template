const handler = () => {
  console.log('hello world!');
};

declare const global: {
  [x: string]: unknown;
};

global.handler = handler;
