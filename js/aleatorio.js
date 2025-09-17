const nomes = ["Juca", "Emerson", "Osvaldo", "Pipokinha", "Deolane", "Virginia"];

export function aleatorio (lista){
    const posiçao = math.floor(math.random()* lista.length);
    return lista[posiçao];
}

export const nome = aleatorio(nomes)