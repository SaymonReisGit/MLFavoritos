# Favoritos do Mercado Livre

## Descrição do Projeto

O projeto "Favoritos do Mercado Livre" tem como objetivo oferecer uma solução para que usuários do Mercado Livre possam salvar e gerenciar facilmente seus produtos favoritos.

## Funcionalidades

### 1. Bucar Produtos

- **Consultar:**
  - O usuário preenche o nome do produto que deja consultar.

### 2. Salvar Produtos como Favoritos:

- **Favoritar:**
  - Ao clicar no ícone do coração o produto será adicionado aos favoritos.

### 3. Listagem de Favoritos

- **Favortios:**
  - O sistema fornece uma página onde será listado todos os produtos já favoritados.

### 4. Adicionar Observações

- **Observação:**
  - Cada produto favoritado possuí um campo onde uma observação pode ser adicionada ao produto.

### 6. Visitar Produto

- **Visitar:**
  - Abre uma nova aba no navegador, onde será redirecionada para a página do produto no site Mercado Livre.

### 7. Excluir Favorito

- **Excluir:**
  - Exclui o produto da listagem de favoritos.

## Componente Externo - Mercado Livre API

### 1. Bucar Produtos

- **Consultar:**
  - O usuário preenche o nome do produto que deja consultar e será exibido 50 dos items mais relevantes encontrados.


### Como executar 

1. **Executar:**
    - Criar Imagem Docker: docker build -t mlfav-front-docker .
    - Executar Docker: docker run -p 4200:4200 mlfav-front-docker

---

## Autor

Este sistema foi desenvolvido por Saymon Carvalho dos Reis, apresentado como MVP para o curso de Pós-Graduação em Engenharia de Software - PUC Rio.
