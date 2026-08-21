import { PlusIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import CardCategoria from '../cardcategoria/CardCategoria'

export default function Categorias() {
	return (
		<main className="grow w-full max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-12 md:pb-16 flex flex-col gap-8">
			<div className="flex justify-between gap-2">
				<h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
					Categorias
				</h1>
				<Link
					to=''
					className="flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors w-fit"
				>
					<PlusIcon size={18} />
					Nova Categoria
				</Link>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				<CardCategoria />
			</div>
		</main>
	)
}
