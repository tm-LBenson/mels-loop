import React, { useState } from "react";
import { PopoverToolbar } from "./popover-toolbar";
import { IPopoverContext } from "../../interfaces/IPopoverContext";
import { Direction } from "../../interfaces/locale-context";
import { ReactPopoverContext } from "../../contexts/popover-context";
import { useToolbar } from "./useToolbar";
import { ComponentProps } from "../../interfaces/models";
import {
	PopoverRoot,
	PopoverTrigger,
	PopoverContent,
	PopoverArrow,
} from "../radix-primitives";
import styles from "./popover.module.scss";

export interface IPopoverProps extends ComponentProps {
	id: string;
	type: string;
	trigger: React.ReactNode;
	side: Direction;
}

export const Popover = ({
	type,
	trigger,
	children,
	side,
	className,
}: IPopoverProps): JSX.Element => {
	const toolbar = useToolbar();
	const ctx: IPopoverContext = {
		toolbar: toolbar.items,
		addToolbarItems: toolbar.addItems,
		removeToolbarItems: toolbar.removeItemsById,
	};

	const [popoverVisible, setPopoverVisible] = useState(false);

	return (
		<ReactPopoverContext.Provider value={ctx}>
			<span className={styles.root} data-popover-type={type}>
				<PopoverRoot
					onOpenChange={(state: boolean) => setPopoverVisible(state)}
				>
					<PopoverTrigger asChild>
						<span
							className={styles.trigger}
							data-popover-visibility={popoverVisible}
							tabIndex={1}
						>
							<span
								className={styles.triggerWrapper}
								data-popover-visibility={popoverVisible}
							>
								{trigger}
							</span>
						</span>
					</PopoverTrigger>
					<PopoverContent
						side={side}
						avoidCollisions={true}
						align="center"
						sideOffset={5}
					>
						<div className={styles.content}>
							<PopoverToolbar items={toolbar.items} />
							{children}
						</div>
						<PopoverArrow />
					</PopoverContent>
				</PopoverRoot>
			</span>
		</ReactPopoverContext.Provider>
	);
};

export default Popover;
