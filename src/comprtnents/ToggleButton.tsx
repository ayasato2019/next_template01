import React, { FC, MouseEventHandler } from "react";
import styles from '../styles/Home.module.scss';

// type Props = {
// 	open: boolean;
// 	onClick: MouseEventHandler;
// 	controls: string;
// 	label: string;
// };

export const ToggleButton = () => {
	return (
		<button className={styles['p-header-nav__trigger']}
			// type="button"
			// aria-controls={controls}
			// aria-expanded={open}
			// aria-label={label}
			// onClick={onClick}
			>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};
