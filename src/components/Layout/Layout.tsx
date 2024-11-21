import React from 'react';
import type { ReactNode } from 'React';

import cn from 'classnames';

import styles from 'src/components/Layout/Layout.module.css';

type Props = {
  children: ReactNode;
  isColumn?: boolean;
};

export function Layout({ children, isColumn = false }: Props) {
  const classNames = cn(styles.root, { [styles.isColumn]: isColumn });
  return <div className={classNames}>{children}</div>;
}
