const ListasSelecaoPokemon = document.querySelectorAll(".pokemon")

ListasSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener("click", () => {

        EsconderCartaoPokedev();

        const IdPokemonSelecionado = MostrarCartaoPokemon(pokemon);

        esconderPokemonNaListagem();

        ativarPomenoNaListagem(IdPokemonSelecionado);
    })
})

function ativarPomenoNaListagem(IdPokemonSelecionado) {
    const PokemonSelecionadoNaListagem = document.getElementById(IdPokemonSelecionado);
    PokemonSelecionadoNaListagem.classList.add("ativo");
}

function esconderPokemonNaListagem() {
    const PokemonAtivoNaListagem = document.querySelector(".ativo");
    PokemonAtivoNaListagem.classList.remove("ativo");
}

function MostrarCartaoPokemon(pokemon) {
    const IdPokemonSelecionado = pokemon.attributes.id.value;
    const IdDoCartaoPokemonParaAbrir = "cartao-" + IdPokemonSelecionado;
    const CartaoPokemonParaAbrir = document.getElementById(IdDoCartaoPokemonParaAbrir);
    CartaoPokemonParaAbrir.classList.add("aberto");
    return IdPokemonSelecionado;
}

function EsconderCartaoPokedev() {
    const CartaopPkemonaberto = document.querySelector(".aberto");
    CartaopPkemonaberto.classList.remove("aberto");
}
