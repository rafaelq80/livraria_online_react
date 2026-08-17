import { ImageIcon } from '@phosphor-icons/react'
import type { ReactNode } from 'react'

export interface CardProps {
	icon: ReactNode
	title: string
	imageUrl?: string
}

export default function Card({ icon, title, imageUrl }: CardProps) {
	return (
		<div className="flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer">
			<div className="w-full h-48 bg-slate-100 flex items-center justify-center overflow-hidden">
				{imageUrl ? (
					<img
						src={imageUrl}
						alt={title}
						className="w-full h-full object-cover"
					/>
				) : (
					<ImageIcon
						size={48}
						weight="light"
						className="text-slate-400"
					/>
				)}
			</div>
			<div className="p-6 flex flex-col gap-2">
				<div className="flex items-center gap-2">
					<span className="text-blue-700">{icon}</span>
					<h3 className="text-xl font-semibold text-slate-800">
						{title}
					</h3>
				</div>
			</div>
		</div>
	)
}
