export default class ArrayBufferConverter {
  static load(data) {
    this.data = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(this.data);

    for (let i = 0; i < data.length; i += 1) {
      bufferView[i] = data.charCodeAt(i);
    }

    return this.data;
  }

  static toString() {
    return String.fromCharCode(...new Uint16Array(this.data));
  }
}
