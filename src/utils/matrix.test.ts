import MatrixUtils from './matrix';

describe('Matrix Utils', () => {
  it('should convert index 6 to x:1, y:1 position', () => {
    // Given
    const index = 6;

    // When
    const result = MatrixUtils.getMatrixPositionFromIndex(index);

    // Then
    expect(result).toEqual({ x: 1, y: 1 });
  });

  it('should convert x:1, y:1 position to index 6', () => {
    // Given
    const position = { x: 1, y: 1 };

    // When
    const result = MatrixUtils.getIndexFromMaxtrixPosition(position);

    // Then
    expect(result).toEqual(6);
  });
});
