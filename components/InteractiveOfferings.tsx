'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/InteractiveOfferings.module.css';

const offerings = [
	{
		title: 'The Resonance Ritual™',
		description: [
			{ text: 'A private sound and bodywork ceremony for those who carry vision.', italic: false },
			{ text: 'Where science softens into spirit.', italic: true },
			{ text: 'By invitation only', italic: true }
		]
	},
	{
		title: 'The Resonance Reset™',
		description: [
			{ text: 'A potent recalibration for high-functioning minds and tired nervous systems.', italic: false },
			{ text: 'Offered in-home or en suite', italic: true }
		]
	},
	{
		title: 'Angel Note Immersion™',
		description: [
			{ text: 'An ethereal sound experience for private gatherings, intimate moments, or creative awakenings.', italic: false },
			{ text: 'Custom rates by request', italic: true }
		]
	},
	{
		title: 'Build Your Own Ritual™',
		description: [
			{ text: 'For those who know exactly what they need… or nothing at all, except to return to themselves.', italic: false },
			{ text: 'Curated in consultation', italic: true }
		]
	}
];

const AccordionItem = ({ item, isOpen, onClick }) => (
	<div className={styles.offeringItem}>
		<motion.header
			initial={false}
			onClick={onClick}
			className={styles.offeringHeader}
		>
			<h3 className={styles.offeringTitle}>{item.title}</h3>
		</motion.header>
		<AnimatePresence initial={false}>
			{isOpen && (
				<motion.section
					key="content"
					initial="collapsed"
					animate="open"
					exit="collapsed"
					variants={{
						open: { opacity: 1, height: 'auto' },
						collapsed: { opacity: 0, height: 0 }
					}}
					transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
					className={styles.offeringContent}
				>
					{item.description.map((line, index) => (
						<p key={index}>
							{line.italic ? <em>{line.text}</em> : line.text}
						</p>
					))}
				</motion.section>
			)}
		</AnimatePresence>
	</div>
);

const InteractiveOfferings: React.FC = () => {
	const [expanded, setExpanded] = useState<number | false>(false);

	return (
		<section className={styles.offeringsContainer}>
			{offerings.map((offering, index) => (
				<AccordionItem
					key={index}
					item={offering}
					isOpen={index === expanded}
					onClick={() => setExpanded(index === expanded ? false : index)}
				/>
			))}
		</section>
	);
};

export default InteractiveOfferings;
