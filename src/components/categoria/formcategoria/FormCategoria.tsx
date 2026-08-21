
function FormCategoria() {

  return (
    <main className="grow w-full max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 text-center">
          Cadastrar Categoria
        </h1>
      </div>

      <form
        className="flex flex-col gap-5 bg-white border border-slate-200 rounded-lg p-6 md:p-8"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="tipo" className="text-sm font-medium text-slate-700">
            Nome
          </label>
          <input
            id="tipo"
            name="tipo"
            type="text"
            required
            className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Ex: Ficção"

          />
        </div>

        <div className="flex items-center justify-center gap-3 mt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white text-base px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Cadastrar Categoria
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
  );
}

export default FormCategoria