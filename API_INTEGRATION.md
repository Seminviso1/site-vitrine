# API Integration Documentation

This document describes the API integration architecture for the Vitrine Tecnológica application.

## Architecture Overview

The application has been refactored to use real API endpoints instead of mock data. The architecture follows these principles:

1. **Centralized API Service**: All network requests are handled through `src/services/api.ts`
2. **Type Safety**: TypeScript interfaces ensure type safety throughout the data flow
3. **Data Mapping**: API responses are mapped to component-compatible formats
4. **Error Handling**: Comprehensive error handling with user-friendly messages
5. **Loading States**: All components show loading indicators during data fetching

## Configuration

### Base URL

The API base URL is configured in `src/services/api.ts`:

```typescript
export const API_BASE_URL = 'https://api.example.com';
```

**To update the API URL**: Simply change the `API_BASE_URL` constant in `src/services/api.ts`.

### Available Endpoints

Currently implemented endpoints:

- **Patents**: `GET /production/patent`
- **Software**: `GET /production/software`

Placeholder endpoints (not yet implemented):

- **Trademarks**: Not yet available
- **Industrial Designs**: Not yet available
- **Hardware Circuits**: Not yet available
- **Sustainable Technologies**: Not yet available

## API Response Format

Based on the provided schema, the API returns data in the following format:

### Patent/Software Response

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

### API Response → Component Props

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

## Adding New Endpoints

To add a new endpoint:

1. **Define the API response interface** in `src/services/api.ts`:
   ```typescript
   interface NewCategoryApiResponse {
     // Define fields based on API schema
   }
   ```

2. **Create a mapping function**:
   ```typescript
   const mapNewCategoryToItem = (item: NewCategoryApiResponse): ApiItem => ({
     id: item.id,
     image: item.has_image
       ? `${API_BASE_URL}/images/category/${item.id}.jpg`
       : 'fallback-url',
     title: item.title,
     description: `Your description format`
   });
   ```

3. **Create a fetch function**:
   ```typescript
   export const fetchNewCategory = async (): Promise<ApiItem[]> => {
     try {
       const response = await apiClient.get<NewCategoryApiResponse[]>('/endpoint');
       return response.data.map(mapNewCategoryToItem);
     } catch (error) {
       if (error instanceof AxiosError) {
         throw new Error(`Failed to fetch: ${error.message}`);
       }
       throw new Error('Failed to fetch');
     }
   };
   ```

4. **Update the page component**:
   ```typescript
   import { fetchNewCategory } from '../services/api';

   function NewCategoryPage() {
     return <CategoryPageLayout title="Category" fetchFunction={fetchNewCategory} />;
   }
   ```

## Error Handling

The API service handles errors at multiple levels:

1. **Network Errors**: Axios catches connection issues
2. **HTTP Errors**: Non-2xx responses are caught and handled
3. **Timeout**: 10-second timeout configured
4. **Component Level**: Error state displayed to users

## Testing

To test the API integration:

1. **Update the API_BASE_URL** to your actual API endpoint
2. **Ensure CORS is configured** on the API server
3. **Test each endpoint** individually through the UI
4. **Verify error handling** by testing with invalid URLs

## Migration Notes

### What Changed

- Removed dependency on `src/lib/mockData.ts`
- Removed `src/lib/api.ts` (old mock API)
- Created new `src/services/api.ts` with real API integration
- Updated all page components to use new fetch functions
- Updated `CategoryPageLayout` to accept `fetchFunction` prop

### Old Files (Can be Removed)

These files are no longer used and can be deleted:

- `src/lib/mockData.ts`
- `src/lib/api.ts`
- `src/server.ts`

## Future Enhancements

1. **Caching**: Implement API response caching
2. **Pagination**: Add support for paginated responses
3. **Search**: Integrate search functionality with API
4. **Filtering**: Add filtering capabilities
5. **Authentication**: Add auth headers if required
6. **Rate Limiting**: Implement rate limiting protection
