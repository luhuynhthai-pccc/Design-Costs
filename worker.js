export default {
  async fetch(request, env) {
    return new Response("Design Costs API đang hoạt động!", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};