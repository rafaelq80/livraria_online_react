import { NumericFormat } from 'react-number-format'

function FomrProduto() {
	return (
		<main className="grow w-full max-w-3xl mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl md:text-4xl font-semibold text-slate-800 text-center">
					Cadastrar Produto
				</h1>
			</div>

			<form className="flex flex-col gap-5 bg-white border border-slate-200 rounded-lg p-6 md:p-8">
				<div className="flex flex-col gap-2">
					<label
						htmlFor="titulo"
						className="text-sm font-medium text-slate-700"
					>
						Título
					</label>
					<input
						id="titulo"
						name="titulo"
						type="text"
						required
						className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
						placeholder="Título do livro"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="autor"
						className="text-sm font-medium text-slate-700"
					>
						Autor
					</label>
					<input
						id="autor"
						name="autor"
						type="text"
						required
						className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
						placeholder="Nome do autor"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="preco"
						className="text-sm font-medium text-slate-700"
					>
						Preço (R$)
					</label>
					<NumericFormat
						id="preco"
						name="preco"
						thousandSeparator="."
						decimalSeparator=","
						decimalScale={2}
						fixedDecimalScale
						allowNegative={false}
						prefix="R$ "
						className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
						placeholder="R$ 0,00"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="foto"
						className="text-sm font-medium text-slate-700"
					>
						Foto
					</label>
					<input
						id="foto"
						name="foto"
						type="text"
						className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
						placeholder="https://..."
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="categoria"
						className="text-sm font-medium text-slate-700"
					>
						Categoria
					</label>
					<select
						id="categoria"
						name="categoria"
						className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
					>
						<option value="" disabled>Selecione uma Categoria</option>
					</select>
				</div>

				<div className="flex items-center justify-center gap-3 mt-2">
					<button
						type="submit"
						className="bg-blue-600 text-white text-base px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
					>
						Cadastrar Produto
					</button>
					<button
						type="button"
						className="text-base px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors font-medium"
					>
						Cancelar
					</button>
				</div>
			</form>
		</main>
	)
}

export default FomrProduto
