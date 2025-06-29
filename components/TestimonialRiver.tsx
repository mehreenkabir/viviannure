'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/TestimonialRiver.module.css';

const testimonials = [
	{
		quote: "Vivian’s presence is a gentle invitation to remember the sacred within. I left feeling lighter, softer, and more myself.",
		author: "Amber"
	},
	{
		quote: "The ritual was a poetic unfolding. Every gesture felt intentional, every word a blessing. I carry the resonance with me still.",
		author: "Andrea"
	},
	{
		quote: "Vivian’s intuition is profound. She holds space with such grace and clarity. I felt deeply seen and honored.",
		author: "Erica"
	},
	{
		quote: "A sanctuary for the soul. Vivian’s work is both powerful and exquisitely tender.",
		author: "Stacie Parks"
	},
	{
		quote: "Vivian does an amazing job!",
		author: "Rhonda"
	},
	{
		quote: "Vivian is so knowledgeable and caring. She listens to your needs and shares her experience to help your condition improve! She is awesome!",
		author: "Rhonda Redding"
	},
	{
		quote: "Vivian is a very knowledgeable masseuse. I am looking forward to going back!",
		author: "Susan"
	},
	{
		quote: "Very relaxing prenatal massage. Any expecting mamas out there should give this a try to help with those pregnancy aches and pains for some relaxation.",
		author: "Cassie Jackson"
	},
	{
		quote: "Excellent would go every week if I could!! Very Relaxing!!!",
		author: "Kerri"
	},
	{
		quote: "Excellent and so Relaxing Message!!!!!",
		author: "Kerri"
	},
	{
		quote: "Very professional! Was an excellent experience!! A+++++",
		author: "Kerri"
	},
	{
		quote: "Very professional, told me my trouble areas and how to help them in the future, great pressure!",
		author: "Abby"
	},
	{
		quote: "Extremely welcoming and relaxing. Very considerate.",
		author: "Nikki Gates"
	},
	{
		quote: "One of the best massages I have ever received. The therapist is very intentional and paid close attention to my body and what it needed as well shared some helpful advice.",
		author: "(Anonymous)"
	}
];

const TestimonialRiver: React.FC = () => {
	const riverRef = useRef<HTMLDivElement>(null);
	const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

	// Auto-scroll on desktop only
	useEffect(() => {
		if (!riverRef.current || isTouchDevice) return;
		const el = riverRef.current;
		let frame: number;
		let last = Date.now();
		const scroll = () => {
			const now = Date.now();
			const dt = now - last;
			last = now;
			el.scrollLeft += 0.04 * dt; // slow scroll
			frame = requestAnimationFrame(scroll);
		};
		frame = requestAnimationFrame(scroll);
		return () => cancelAnimationFrame(frame);
	}, [isTouchDevice]);

	const duplicatedTestimonials = [...testimonials, ...testimonials];

	return (
		<div className={styles.riverContainer} role="marquee" ref={riverRef}>
			<motion.div
				className={styles.riverTrack}
				// No x animation here; fade handled per item
			>
				{duplicatedTestimonials.map((testimonial, index) => (
					<motion.div
						key={index}
						className={styles.testimonialItem}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.6 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
					>
						<p className={styles.quote}>“{testimonial.quote}”</p>
						<p className={styles.author}>— {testimonial.author}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default TestimonialRiver;
