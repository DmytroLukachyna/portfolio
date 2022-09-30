export type Display =
  | 'table'
  | 'inline'
  | 'inline-block'
  | 'block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'none';
export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type FlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'inherit'
  | 'initial'
  | 'unset';
export type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'inherit'
  | 'initial'
  | 'unset';
export type AlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch'
  | 'inherit'
  | 'initial'
  | 'unset';
export type AlignContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'normal'
  | 'baseline'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'
  | 'inherit'
  | 'initial'
  | 'unset';
export type AlignSelf =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'auto'
  | 'normal'
  | 'baseline'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'
  | 'revert'
  | 'inherit'
  | 'initial'
  | 'unset';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
export type FlexGrow = 0 | 1 | 2 | 3 | 4 | 5;
export type Gap = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40;
export type Overflow =
  | 'visible'
  | 'hidden'
  | 'x-hidden'
  | 'y-hidden'
  | 'scroll'
  | 'x-scroll'
  | 'y-scroll'
  | 'auto'
  | 'x-auto'
  | 'y-auto'
  | 'inherit'
  | 'x-inherit'
  | 'y-inherit';
export type Transition = 'default' | 'inherit' | 'initial' | 'unset';
