import ArrayBufferConverter from '../src/js/ArrayBufferConverter';

test('Load string', () => {
  const inputData = 'Tests';
  const buffer = ArrayBufferConverter.load(inputData);

  const expected = 'Tests'; // ожидает

  const received = ArrayBufferConverter.toString(buffer); // получает
  expect(received).toEqual(expected); // сравнивает
});
