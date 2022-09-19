import styles from './Cell.module.scss';

import React from 'react';


export interface CellProps {
  date: number;
}

export default function Cell(props: CellProps): JSX.Element {
  const { date } = props;
  return (
    <div className={styles.cell}> { date } </div>
  );
}

export function getCells(count: number): JSX.Element[] {
  return Array.from({length: count}, (element, index) => (
    <Cell key={index} date={ index + 1 } />
  ));
}
