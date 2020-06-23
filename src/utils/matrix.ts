export interface IPosition {
  x: number;
  y: number;
}

export default class MatrixUtils {
  static readonly COLUMNS_NUMBER = 5;

  // Index to Matrix position method
  static getMatrixPositionFromIndex = (index: number): IPosition => {
    const rowIndex = Math.floor(index / MatrixUtils.COLUMNS_NUMBER);
    const columnIndex = index % MatrixUtils.COLUMNS_NUMBER;
    return { x: rowIndex, y: columnIndex };
  };

  // Matrix position to index method
  static getIndexFromMaxtrixPosition = (matrixPosition: IPosition) => {
    return matrixPosition.x * MatrixUtils.COLUMNS_NUMBER + matrixPosition.y;
  };
}
