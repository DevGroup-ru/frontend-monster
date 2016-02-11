class HashApi {
  constructor() {
    this.functionCalls = {};

    if (document.location.hash) {
      const matches = document.location.hash.match(/#hashApi:(.*?):\/hashApi/);
      if (matches && matches.length === 2) {
        const functionCalls = JSON.parse(decodeURIComponent(matches[1]));

        for (const item of functionCalls) {
          if (item.func) {
            this.functionCalls[item.func] = item.args || {};
          }
        }
      }
    }
  }

  shouldCall(func) {
    return this.functionCalls[func] || false;
  }
}

export default HashApi;
