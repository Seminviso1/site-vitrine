# API Integration Documentation

This document describes the API integration architecture for the Vitrine Tecnológica application.

## Architecture Overview

The application has been refactored to use real API endpoints from the SIMCC API. The architecture follows these principles:

1. **Centralized API Service**: All network requests are handled through `src/lib/api.ts`
2. **Type Safety**: TypeScript interfaces ensure type safety throughout the data flow
3. **Data Mapping**: API responses are mapped to component-compatible formats
4. **Error Handling**: Comprehensive error handling with user-friendly messages
5. **Loading States**: All components show loading indicators during data fetching

## Configuration

### Base URL

The API base URL is configured in `src/lib/api.ts`:

```typescript
export const API_BASE_URL = 'https://simcc.uesc.br/v3/api';
```

**To update the API URL**: Simply change the `API_BASE_URL` constant in `src/lib/api.ts`.

### Available Endpoints

Currently implemented endpoints:

- **Software**: `GET /software`
- **Patents**: `GET /patent`
- **Trademarks**: `GET /trademark`
- **Industrial Designs**: `GET /industrial-design`
- **Hardware Circuits**: `GET /hardware-circuit`
- **Sustainable Technologies**: `GET /sustainable-technology`

## API Response Format

### Software Response

```json
[
  {
    "title": "string",
    "year": 0,
    "has_image": false,
    "relevance": false,
    "name": "string",
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "stars": 0
  }
]
```

### Patent Response (used for Patents, Trademarks, Industrial Designs, Hardware, Sustainable Technologies)

```json
[
  {
    "title": "string",
    "researcher": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "year": 0,
    "stars": 0,
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "lattes_id": "string",
    "patent": null,
    "has_image": true,
    "relevance": true,
    "code": "string"
  }
]
```

## Data Mapping

The API service automatically maps API responses to the component format:

### Software Mapping

| API Field | Component Field | Transformation |
|-----------|----------------|----------------|
| `id` | `id` | Direct mapping |
| `title` | `title` | Direct mapping |
| `year`, `stars` | `description` | Concatenated string |
| `has_image` | `image` | Conditional: API URL if true, fallback stock photo if false |

### Patent Mapping

| API Field | Component Field | Transformation |
|-----------|----------------|----------------|
| `id` | `id` | Direct mapping |
| `title` | `title` | Direct mapping |
| `researcher`, `year`, `stars` | `description` | Concatenated string |
| `has_image` | `image` | Conditional: API URL if true, fallback stock photo if false |

### Image Handling

- If `has_image` is `true`: Uses `${API_BASE_URL}/images/{category}/{id}.jpg`
- If `has_image` is `false`: Uses fallback stock photo from Pexels

## Component Integration

### CategoryPageLayout

The main component for displaying category data:

```typescript
<CategoryPageLayout
  title="Patents"
  fetchFunction={fetchPatents}
/>
```

**Props:**
- `title`: Display title for the page
- `fetchFunction`: Async function that returns `Promise<ApiItem[]>`

### States

Each category page handles three states:

1. **Loading**: Shows "Loading items..." message
2. **Error**: Shows error message with details
3. **Success**: Displays grid of items or empty state message

## Error Handling

The API service handles errors at multiple levels:

1. **Network Errors**: Axios catches connection issues
2. **HTTP Errors**: Non-2xx responses are caught and handled
3. **Timeout**: 10-second timeout configured
4. **Component Level**: Error state displayed to users

## Testing

To test the API integration:

1. The API is already connected to `https://simcc.uesc.br/v3/api`
2. Test each endpoint individually through the UI
3. Verify error handling by testing with invalid URLs or network conditions
4. Check that images load correctly based on the `has_image` flag

## Migration Notes

### What Changed

- Moved API service from `src/services/api.ts` to `src/lib/api.ts`
- Updated base URL to use `https://simcc.uesc.br/v3/api`
- Updated Software endpoint to use correct schema with `name` field
- Removed all mock data dependencies
- Deleted files:
  - `src/lib/mockData.ts` (mock data)
  - `src/services/api.ts` (old API service)
  - `src/server.ts` (mock server routes)

### Files That Use the API

- `src/components/CategoryPageLayout.tsx` - Main layout component
- `src/pages/PatentsPage.tsx`
- `src/pages/SoftwarePage.tsx`
- `src/pages/TrademarksPage.tsx`
- `src/pages/IndustrialDesignsPage.tsx`
- `src/pages/HardwareCircuitsPage.tsx`
- `src/pages/SustainableTechnologiesPage.tsx`

## Future Enhancements

1. **Caching**: Implement API response caching
2. **Pagination**: Add support for paginated responses
3. **Search**: Integrate search functionality with API
4. **Filtering**: Add filtering capabilities
5. **Authentication**: Add auth headers if required
6. **Rate Limiting**: Implement rate limiting protection
