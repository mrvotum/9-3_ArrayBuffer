export default class ArrayBufferConverter {
  load(data) {
    this.data = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(this.data);
    for (let i = 0; i < data.length; i += 1) {
      bufferView[i] = data.charCodeAt(i);
    }

    return this.data;
  }

  toString() {
    const bufferView = new Uint16Array(this.data);
    let str = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      str += String.fromCharCode(bufferView[i]);
    }

    return str;
  }
}
