import indexHtml from './index.html';

export default {
  async fetch(request, env) {
    return new Response(indexHtml, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
};