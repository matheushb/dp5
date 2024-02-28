Para exercitar o que estamos aprendendo em sala de aula, é proposta a seguinte atividade:
Contextualização: Vamos desenvolver uma aplicação que busque na poke API por151 pokemons. Será necessário mapear os dados, para cada pokemon os dados que serão relevantes para a aplicação são:
Nome, Tipo, Peso, Altura, Número da Dex e a o link da Sprite (imagem do pokemon).
O Número da dex deve ser correspondente a versão Fire Red do jogo, você pode entender como buscar esse dado facilmente pela documentação: https://pokeapi.co/

Após conseguir buscar os dados dos 151 pokemons, será necessário salvar eles em um arquivo .json

Passos:

1 - Buscar 151 pokemons
2 - Percorrer o resultado da busca anterior dando fetch em cada url (Ao realizar a busca de 151 pokemons ele retorna uma url para cada um e nessa url estão as informações que precisamos, diferente da ultima aula que procuramos apenas 1 pokemon)
3 - Mapear os dados para que sejam salvos somente as informações necessárias pedidas na contextualização
4 - Salvar no arquivo pokemon.json os 151 pokemons

URL para o primeiro fetch: https://pokeapi.co/api/v2/pokemon?limit=151

Importante: tente realizar todo o exercicios utilizando promises e promise.all, isso irá executar as promessas de forma concorrente e teremos uma melhor performance na busca e inserção de dados.

Para finalizar, você deve criar esses mesmo script, porém agora utilizando o async await para cada fetch nos 151 pokemons. Isso deve ser feito para um fim didático, onde você poderá perceber a demora na execução da sua aplicação devido ao mal uso das promessas em forma sequencial.

Desafio extra: utilize seu JSON de pokemons para renderizar os 151 pokemons em uma página html ou em um pdf
