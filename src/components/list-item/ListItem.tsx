import React, { forwardRef, PropsWithChildren } from 'react';
import styles from './ListItem.module.scss';
import type { LinkTargetProps } from '../link/Link';

type ListItemProps = {
	label?: string;
	url?: string;
	target?: LinkTargetProps;
	className?: string;
};

const ListItem = forwardRef<HTMLLIElement, PropsWithChildren<ListItemProps>>(
	({ children }: PropsWithChildren<ListItemProps>, ref) => (
		<li ref={ref} className={styles.root}>
			{children}
		</li>
	)
);

ListItem.displayName = 'ListItem';

export default ListItem;
export type { ListItemProps };
