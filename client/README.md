# AI Study Assistant Client

## Frontend Architecture

This client follows a layered architecture:

- **UI Layer** (`components`, `pages`): Pure presentation and user interactions.
- **Application Layer** (`app`): Routing and provider composition.
- **State Layer** (`context`, `hooks`): Authentication context and reusable data-fetching hooks.
- **Service Layer** (`services`): API use-cases; pages never call Axios directly.
- **Infrastructure Layer** (`config`, `services/apiClient.js`): Centralized Axios setup.

## Dependency Injection & Inversion of Control

- Pages depend on domain services (`propertyService`, `authService`) rather than Axios.
- Services depend on `apiClient`, which can be swapped for a real backend base URL via `VITE_API_BASE_URL`.
- `AuthProvider` controls auth state and injects it into components through React Context.

## Routing Design

- Public routes: `/`, `/login`, `/properties`
- Protected route: `/dashboard`
- Fallback route: `*` to `NotFound`

## Structure

```txt
src/
  app/
  components/
    common/
    ui/
  pages/
  services/
  context/
  hooks/
  utils/
  config/
  styles/
```

## Run

```bash
npm install
npm run dev
```
