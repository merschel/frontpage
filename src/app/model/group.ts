import { Tile } from './tile'
import { Settings } from './settings'

export interface Group {
  name: string,
  tiles: Tile[],
  settings: Settings
}
