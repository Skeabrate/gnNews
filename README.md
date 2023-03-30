# gnNews - gnStudio React.js developer challenge

Website Url: https://gnnews-skeabrate.vercel.app/

## Wykorzystane technologie:

- Vite + React + Typescript
- react-router-dom v6.9.0
- Redux Toolkit
- Format.js
- Tailwind CSS
- react-query

Api: https://gnews.io
Wybrałem gnews API, bo umożliwia pobieranie danych w zdeployowanym projekcie oraz udostępnia newsy w wielu językach. Minusem jest za to mała ilość dostępnych zapytań, daltego cache danych w react-query ustawiłem na 2 minuty. Jednak w razie wyczerpania jednego klucza udostępniam dwa klucze:

Klucz1: 4fa98e1c59ff225fe6372b9c3193de63

Klucz2: 0501a5597956262cf277399f44c888dd

## Statyczna analiza kodu:

- Prettier
- Eslint

## Testowanie

- vitest, react-testing-library

## Dodatkowe funckje strony:

- tryb jasny i ciemny (selectbox w headerze), bo warto dbać o wzrok użytkownika, gdy będzie przeglądał portal wieczorem :)
- trzy wersje językowe: angielska, francuska i niemiecka (selectbox w headerze). Zmiana wersji językowej wywoła pobranie newsów w wybranym języku, natomiast mogą one się różnić (wynika to z działania gnews api).

## Environment Variables

VITE_GNEWS_API_KEY=4fa98e1c59ff225fe6372b9c3193de63 (or 0501a5597956262cf277399f44c888dd)

## Run Locally

Clone the project

```bash
  git clone https://github.com/Skeabrate/gnNews.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Running Tests

To run tests, run the following commands:

```bash
  npm run test
```
