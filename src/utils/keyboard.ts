import MatrixUtils, { IPosition } from './matrix';

export default class KeyboardUtils {
  // Keyboard navigation
  static goUp = (position: IPosition): IPosition => ({
    x: Math.max(position.x - 1, 0),
    y: position.y,
  });

  static goBottom = (position: IPosition): IPosition => ({
    x: Math.min(position.x + 1, MatrixUtils.COLUMNS_NUMBER),
    y: position.y,
  });

  static goLeft = (position: IPosition): IPosition => ({
    x: position.x,
    y: Math.max(position.y - 1, 0),
  });

  static goRight = (position: IPosition): IPosition => ({
    x: position.x,
    y: Math.min(position.y + 1, MatrixUtils.COLUMNS_NUMBER),
  });
}
