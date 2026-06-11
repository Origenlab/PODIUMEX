# Graph Report - .  (2026-04-21)

## Corpus Check
- Large corpus: 390 files · ~460,116 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 26 nodes · 50 edges · 3 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]

## God Nodes (most connected - your core abstractions)
1. `validateField()` - 6 edges
2. `showFieldError()` - 5 edges
3. `clearFieldError()` - 4 edges
4. `showFormError()` - 3 edges
5. `validateEmail()` - 3 edges
6. `validatePhone()` - 3 edges
7. `initializeMenu()` - 2 edges
8. `initializeHeaderScroll()` - 2 edges
9. `initializeScrollTop()` - 2 edges
10. `initializeFAQ()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Community 0"
Cohesion: 0.22
Nodes (8): debounce(), getServiceFromPath(), initializeContactForm(), initializeFAQ(), initializeHeaderScroll(), initializeMenu(), initializeServiceFAQ(), showNotification()

### Community 1 - "Community 1"
Cohesion: 0.22
Nodes (8): formatPrice(), getQueryParam(), initializeAnimations(), initializeCTAForm(), initializeLazyLoading(), initializeScrollTop(), initializeSmoothScroll(), initializeWhatsAppForm()

### Community 2 - "Community 2"
Cohesion: 0.4
Nodes (6): clearFieldError(), showFieldError(), showFormError(), validateEmail(), validateField(), validatePhone()

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `validateField()` connect `Community 2` to `Community 0`, `Community 1`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Why does `showFieldError()` connect `Community 2` to `Community 0`, `Community 1`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Why does `initializeMenu()` connect `Community 0` to `Community 1`?**
  _High betweenness centrality (0.000) - this node is a cross-community bridge._