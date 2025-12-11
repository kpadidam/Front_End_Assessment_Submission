# Inflektion Frontend Assessment

A modern, high-performance Partner Portal application built with Angular 19, showcasing partner data with advanced table functionality, client-side pagination, and real-time data fetching.


## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Architecture & Design Decisions](#architecture--design-decisions)
- [API Integration](#api-integration)
- [Error Handling](#error-handling)
- [Future Enhancements](#future-enhancements)

## Overview

This project is a Single Page Application (SPA) developed for Inflektion's partner Portal.

The application is based on Angular development:
- **Angular 19** with standalone components
- **Signals-first reactive architecture**
- **Resource API** for declarative data fetching
- **Tailwind CSS** for utility-first styling

## Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| **Angular** | 19.x | Frontend framework with standalone components |
| **TypeScript** | 5.x | Type-safe development |
| **Tailwind CSS** | 3.4+ | Utility-first CSS framework |
| **RxJS** | 7.x | Reactive programming (minimal usage) |

## Features

### Core Features
- **Dynamic Data Fetching** - Retrieves partner data from REST API
- **Interactive Table** - Displays all partner fields with proper formatting
- **Client-Side Pagination** - 15 items per page with navigation controls
- **Loading States** - Animated spinner during data fetch
- **Error Handling** - User-friendly error messages with retry capability
- **Responsive Design** - Adapts to desktop, tablet, and mobile screens
- **Sticky Table Headers** - Headers remain visible during scroll
- **Hover Effects** - Interactive row highlighting
- **Type Safety** - Strict TypeScript typing throughout

### Data Fields Displayed
1. **ID** - Unique partner identifier
2. **Partner Name** - Name of the partner
3. **Partner Type** - Influencer or Affiliate (color-coded badges)
4. **Conversions** - Number of conversions
5. **Commissions** - Commission amount (formatted as currency)
6. **Gross Sales** - Total sales (formatted as currency)
7. **Contract Type** - Type of contract agreement

## Project Structure

```
src/
├── app/
│   ├── features/
│   │   └── partners/              # Partners feature module
│   │       ├── components/
│   │       │   └── partner-list/
│   │       │       ├── partner-list.component.ts
│   │       │       ├── partner-list.component.html
│   │       │       └── partner-list.component.css
│   │       ├── models/
│   │       │   └── partner.model.ts    # Partner interface
│   │       ├── services/
│   │       │   └── partner.service.ts  # Data fetching service
│   │       └── index.ts                # Barrel exports
│   ├── app.ts                     # Root component
│   ├── app.html                   # Root template
│   ├── app.routes.ts              # Application routing
│   └── app.config.ts              # App configuration
├── styles.css                     # Global styles + Tailwind
└── main.ts                        # Application bootstrap
```

### Architecture: Feature-Based Structure

The project follows a **feature-based architecture** rather than a traditional layer-based approach. This provides:
- Better scalability as features grow
- Clear separation of concerns
- Easier code navigation
- Improved maintainability


## Architecture & Design Decisions

### 1. Signals-First Reactive Architecture

**Decision:** Use Angular Signals instead of traditional RxJS Observables for state management.

**Rationale:**
- **Fine-grained reactivity** - Only affected components re-render
- **Better performance** - No Zone.js overhead
- **Improved developer experience** - Simpler mental model
- **Future-proof** - Aligns with Angular's strategic direction

### 3. Standalone Components

**Decision:** Use standalone components (no NgModules).

**Rationale:**
- **Simpler architecture** - No module complexity
- **Better tree-shaking** - Smaller bundle sizes
- **Easier testing** - Isolated component testing
- **Modern standard** - Default in Angular 19

### 4. Tailwind CSS Utility-First Styling

**Decision:** Use Tailwind CSS instead of component-scoped SCSS.

**Rationale:**
- **Rapid development** - Pre-built utility classes
- **Consistency** - Design system tokens ensure uniformity
- **Smaller bundle** - Purges unused CSS automatically
- **Pixel-perfect implementation** - Easy to match Figma designs

### 5. Client-Side Pagination

**Decision:** Implement pagination logic in the frontend.

**Rationale:**
- **API limitation** - API returns all 22 records (no server-side pagination)
- **Performance** - Small dataset, no performance penalty
- **User experience** - Instant navigation between pages
- **Computed signals** - Efficient reactivity without manual subscriptions

## API Integration

### Endpoint
```
GET https://analyze.inflektion.ai/partners.php
```

### Response Format
```json
[
  {
    "id": "1",
    "partnerName": "Green Living",
    "partnerType": "Influencer",
    "conversions": 7,
    "commissions": 420,
    "grosssales": 620,
    "contract": "Partner Default"
  }
]
```

### Data Model (TypeScript Interface)
```typescript
export interface Partner {
  id: string;
  partnerName: string;
  partnerType: 'Influencer' | 'Affiliate';
  conversions: number;
  commissions: number;
  grosssales: number;
  contract: string;
}
```

### Type Safety
- **Strict typing** enforced throughout the application
- **Union types** for partner types prevent invalid values
- **No `any` types** - Full TypeScript strict mode compliance

## Error Handling

### Network Errors
The application gracefully handles various error scenarios:

1. **API Unavailable**
   - Displays user-friendly error message
   - Shows error details in development mode
   - Provides visual feedback (red banner)

2. **Network Timeout**
   - Automatic timeout handling via fetch API
   - Clear error messaging to user

3. **Invalid Data**
   - TypeScript interfaces ensure data structure
   - Null-safe operators prevent runtime errors
   - Fallback to empty array if data is invalid


## Next Enhancements

### Planned Features
- [ ] **Sorting** - Click table headers to sort by column
- [ ] **Filtering** - Filter partners by type, search by name
- [ ] **Export Functionality** - Export table data to CSV/Excel
- [ ] **Message Partners** - Modal for sending messages
- [ ] **Date Range Picker** - Filter by date ranges
- [ ] **Advanced Analytics** - Charts and graphs for partner performance
- [ ] **Server-Side Pagination** - For larger datasets
- [ ] **Caching Strategy** - Reduce API calls with smart caching
- [ ] **Offline Support** - Service Worker integration
- [ ] **Unit Tests** - Comprehensive test coverage
- [ ] **E2E Tests** - Cypress or Playwright integration



## Author

Karthik Padidam

Developed for Inflektion Frontend  Assessment
