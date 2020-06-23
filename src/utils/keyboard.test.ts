import KeyboardUtils from './keyboard';

describe('Keyboard Utils', () => {
  it('should decrease the x position when going up', () => {
    // Given
    const position = { x: 1, y: 1 };

    // When
    const result = KeyboardUtils.goUp(position);

    // Then
    expect(result).toEqual({ x: 0, y: 1 });
  });

  it('should increase the x position when going down', () => {
    // Given
    const position = { x: 1, y: 1 };

    // When
    const result = KeyboardUtils.goBottom(position);

    // Then
    expect(result).toEqual({ x: 2, y: 1 });
  });

  it('should decrease the y position when going left', () => {
    // Given
    const position = { x: 1, y: 1 };

    // When
    const result = KeyboardUtils.goLeft(position);

    // Then
    expect(result).toEqual({ x: 1, y: 0 });
  });

  it('should increase the y position when going right', () => {
    // Given
    const position = { x: 1, y: 1 };

    // When
    const result = KeyboardUtils.goRight(position);

    // Then
    expect(result).toEqual({ x: 1, y: 2 });
  });
});
