# Caderno Aberto

Blog pessoal estático feito para publicar anotações, pensamentos e textos curtos ou longos.

## Estrutura

- `index.html`: página inicial
- `notas/`: área para notas rápidas
- `textos/`: área para textos longos
- `styles.css`: identidade visual e responsividade
- `script.js`: tema claro/escuro e busca por título

## Como editar

1. Abra `index.html`.
2. Para criar uma nota, copie `notas/modelo.html`.
3. Para criar um texto, copie `textos/modelo.html`.
4. Troque os conteúdos de exemplo pelos seus.
5. Adicione os links dos novos arquivos em `notas/index.html` ou `textos/index.html`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie estes arquivos para a branch principal.
3. No GitHub, abra `Settings > Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Escolha a branch principal e a pasta `/ (root)`.
6. Salve e aguarde a URL pública ser gerada.

## Pronto para subir

- site estático sem dependências
- páginas organizadas em `textos/` e `notas/`
- suporte a modo claro e escuro
- busca simples por título na página de textos
- navegação entre posts e entre notas

## Comandos Git sugeridos

Se o Git estiver instalado na sua máquina, estes são os comandos mais comuns:

```bash
git init
git add .
git commit -m "Initial blog setup"
git branch -M main
git remote add origin <URL_DO_SEU_REPOSITORIO>
git push -u origin main
```

## Ideias para a próxima versão

- adicionar uma seção de arquivo por mês
- incluir favicon e imagem de compartilhamento
- criar uma página "sobre mim"
