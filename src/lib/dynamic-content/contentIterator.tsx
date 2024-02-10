import React from 'react';
import { ContentComponent } from './contentComponent';
import { ContentComponentProps, IMLParsedNode } from 'types/models';
import { useComponentAttrs } from '../../hooks/useComponentAttrs';
import { unique } from 'utils';

/**
 * Displays the content of a Content Node, optionally wrapping
 * them with a provided tag. Handles the case of a node with text
 * content.
 * @returns
 */
export const ContentIterator = ({
	componentData,
	className,
}: ContentComponentProps): JSX.Element => {
	const { node } = componentData;
	const { attributes } = useComponentAttrs(node);
	const { children, text } = node;

	if (!node) {
		console.warn('Content Iterator: no input node');
		return <div className="no-data"></div>;
	}

	const elements: IMLParsedNode[] = Array.isArray(children) && children;

	const Tag = componentData.tag as keyof JSX.IntrinsicElements;

	if (!elements?.length) {
		if (Tag) {
			return (
				<Tag className={className} key={unique.id()} {...attributes}>
					{text || ''}
				</Tag>
			);
		}

		return (
			<span className={className} key={unique.id()}>
				{text || ''}
			</span>
		);
	}

	if (Tag) {
		return (
			<Tag key={unique.id()} {...attributes}>
				{elements.map((node) => (
					<ContentComponent key={unique.id()} componentData={{ node }} />
				))}
			</Tag>
		);
	}

	return (
		<>
			{elements.map((node) => {
				return <ContentComponent key={unique.id()} componentData={{ node }} />;
			})}
		</>
	);
};

export default ContentIterator;
