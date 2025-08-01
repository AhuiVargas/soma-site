"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		video.playbackRate = 1;

		// Force load and play for mobile
		video.load();
		
		const attemptPlay = async () => {
			try {
				await video.play();
			} catch (err) {
				console.warn("Autoplay failed — waiting for user interaction?", err);
			}
		};

		// Try to play immediately and on various events
		attemptPlay();
		
		// Fallback for mobile browsers
		const handleUserInteraction = () => {
			attemptPlay();
			document.removeEventListener('touchstart', handleUserInteraction);
			document.removeEventListener('click', handleUserInteraction);
		};
		
		document.addEventListener('touchstart', handleUserInteraction);
		document.addEventListener('click', handleUserInteraction);
	}, []);

	return (
		<main className="relative w-full h-screen overflow-hidden">
			<video
				ref={videoRef}
				autoPlay
				muted
				playsInline
				loop
				preload="metadata"
				webkit-playsinline="true"
				x-webkit-airplay="allow"
				className="fixed top-0 left-0 w-full h-full object-cover z-0"
				src="https://cqzzlpsbwibykkegxmvg.supabase.co/storage/v1/object/public/public-media/smokeLoop.mp4"
			/>

			<div className="fixed top-0 left-0 w-full h-full bg-black/20 z-[1] pointer-events-none" />

			<section className="relative h-screen w-full flex items-center justify-center z-10">
				<Image
					src="/logos/somaProgLogo.png"
					alt="SOMA Logo"
					width={280}
					height={280}
					priority
					placeholder="empty"
				/>
				<div className="absolute bottom-6 left-6 z-10 text-sm tracking-widest uppercase text-mintGreen flex flex-col gap-1">
					<a
						href="https://soundcloud.com/soma-progressive"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-cosmicBlue transition-colors"
					>
						Listen on SoundCloud
					</a>
					<a
						href="mailto:contact@somaprogressive.com"
						className="hover:text-cosmicBlue transition-colors"
					>
						contact@somaprogressive.com
					</a>
				</div>
			</section>
		</main>
	);
}
