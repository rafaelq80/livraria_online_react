import { PlusIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import CardProduto from '../cardproduto/CardProduto';

function Produtos() {
  return (
    <main className="grow w-full max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-12 md:pb-16 flex flex-col gap-8">
      <div className="flex justify-between gap-2">
				<h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
					Produtos
				</h1>
				<Link
					to=''
					className="flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors w-fit"
				>
					<PlusIcon size={18} />
					Novo Produto
				</Link>
			</div>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 md:justify-items-stretch lg:grid-cols-4 gap-4 md:gap-6">
        <CardProduto />
      </div>
    </main>
  );
}

export default Produtos