import ArrayBufferConverter from '../src/js/ArrayBufferConverter';

test('Load string', () => {
  const inputBuffer = new ArrayBufferConverter();
  const inputData = 'Tests';
  const buffer = inputBuffer.load(inputData);

  const expected = 'Tests'; // ожидает

  const received = inputBuffer.toString(buffer); // получает
  expect(received).toEqual(expected); // сравнивает
});
