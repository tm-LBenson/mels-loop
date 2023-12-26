import type { LocaleId, TextDirection } from "../../../locale/locale-context";
import type { ComponentProps } from "../../../interfaces/models";

export type LocaleOption = {
	id: LocaleId;
	symbol: string;
	title: string;
	textDirection: TextDirection;
};

export interface LocaleSelectorProps extends ComponentProps {
	value: LocaleId;
	size: "small" | "medium" | "large";
	options: LocaleOption[];
	onChange?: (value: LocaleId) => void;
}
