import { ASTNODE_TYPES, MLNODE_TYPES } from 'types/nodes';
import { customMarkdownTags } from 'lib/customMarkdownTags';

export const AST2MLTypeMap: Map<ASTNODE_TYPES, MLNODE_TYPES> = new Map<
	ASTNODE_TYPES,
	MLNODE_TYPES
>([
	[ASTNODE_TYPES.PARAGRAPH, MLNODE_TYPES.PARAGRAPH],
	[ASTNODE_TYPES.LINK, MLNODE_TYPES.LINK],
	[ASTNODE_TYPES.IMAGE, MLNODE_TYPES.IMAGE],
	[ASTNODE_TYPES.TEXT, MLNODE_TYPES.TEXT],
	[ASTNODE_TYPES.STRONG, MLNODE_TYPES.STRONG],
	[ASTNODE_TYPES.EM, MLNODE_TYPES.EM],
	[ASTNODE_TYPES.LIST, MLNODE_TYPES.LIST],
	[ASTNODE_TYPES.LIST_ITEM, MLNODE_TYPES.LIST_ITEM],
	[ASTNODE_TYPES.CODE, MLNODE_TYPES.CODE],
	[ASTNODE_TYPES.INLINECODE, MLNODE_TYPES.CODE],
	[ASTNODE_TYPES.CODEBLOCK, MLNODE_TYPES.CODEBLOCK],
	[ASTNODE_TYPES.BLOCK_QUOTE, MLNODE_TYPES.BLOCKQUOTE],
]);

export const INLINE_AST_TYPES: Set<ASTNODE_TYPES> = new Set<ASTNODE_TYPES>([
	ASTNODE_TYPES.TEXT,
	ASTNODE_TYPES.LINK,
	ASTNODE_TYPES.EM,
	ASTNODE_TYPES.INLINECODE,
	ASTNODE_TYPES.STRONG,
	ASTNODE_TYPES.IMAGE,
	ASTNODE_TYPES.INS,
	ASTNODE_TYPES.DEL,
	ASTNODE_TYPES.SUB,
	ASTNODE_TYPES.SUP,
]);

export const INLINE_MLNODE_TYPES: Set<MLNODE_TYPES> = new Set<MLNODE_TYPES>([
	MLNODE_TYPES.TEXT,
	MLNODE_TYPES.LINK,
	MLNODE_TYPES.EM,
	MLNODE_TYPES.CODE,
	MLNODE_TYPES.STRONG,
	MLNODE_TYPES.IMAGE,
	MLNODE_TYPES.INS,
	MLNODE_TYPES.DEL,
	MLNODE_TYPES.SUB,
	MLNODE_TYPES.SUP,
	MLNODE_TYPES.CITE,
	MLNODE_TYPES.LINE,
]);

/** Elements that contain only text */
export const TEXT_NODE_TYPES: Set<MLNODE_TYPES> = new Set<MLNODE_TYPES>([
	MLNODE_TYPES.TEXT,
	MLNODE_TYPES.CODE,
]);

/** Elements that should contain text directly, without an enclosing paragraph */
export const TEXT_CONTAINER_TYPES: Set<ASTNODE_TYPES> = new Set<ASTNODE_TYPES>([
	ASTNODE_TYPES.HEADING,
]);

export const IGNORED_AST_TYPES: Set<ASTNODE_TYPES> = new Set<ASTNODE_TYPES>([
	ASTNODE_TYPES.NEWLINE,
]);

export const NO_PARAGRAPH_TYPES: Set<MLNODE_TYPES> = new Set<MLNODE_TYPES>([
	MLNODE_TYPES.BLOCKQUOTE,
]);

/** Node types in which we enforce verse mode */
export const VERSE_MODE_AST_TYPES: Set<ASTNODE_TYPES> = new Set<ASTNODE_TYPES>([
	ASTNODE_TYPES.CODEBLOCK,
]);

/** Node types in which we enforce normal (non-verse) parse mode */
export const NORMAL_MODE_AST_TYPES: Set<ASTNODE_TYPES> = new Set<ASTNODE_TYPES>([
	ASTNODE_TYPES.HEADING,
]);

/** Node types that should be promoted to a figure if their only content is an image */
export const FIGURE_CONTAINER_TYPES: Map<MLNODE_TYPES, boolean> = new Map<
	MLNODE_TYPES,
	boolean
>([
	[MLNODE_TYPES.LINE, true],
	[MLNODE_TYPES.PARAGRAPH, true],
]);

export const MLTYPE_TO_LINK_TEXT_MAP = new Map<MLNODE_TYPES, string>([
	[MLNODE_TYPES.FIGURE, `[[${customMarkdownTags.figureAbbr}]] %index%`],
]);

export const HTML_VALIDATION_MAP = {
	TR: {
		valid: ['TD', 'TH'],
	},
	TABLE: {
		valid: ['TBODY', 'TR'],
	},
};
