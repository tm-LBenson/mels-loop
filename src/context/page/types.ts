import type { IDynamicContentServer } from '../../lib/types';

/** Describes a content-related context, available to all rendered components under a ML page */
export interface IDynamicContentContext {
	readonly dynamicContentServer: IDynamicContentServer;
	/** The path of the document displayed in the current component */
	readonly documentPath: string;
}

/**
 * Describes a content-related context, available to all rendered components under a ML page
 */
export interface IPageContext {
	readonly dynamicContentServer: IDynamicContentServer;
	/**
	 * The path of the document displayed in the current component
	 */
	readonly documentPath: string;
}
