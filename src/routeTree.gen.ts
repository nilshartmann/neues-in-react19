/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as TitleIndexImport } from './routes/title/index'
import { Route as R20usecontextIndexImport } from './routes/20_use_context/index'
import { Route as R17promiserendernexotischIndexImport } from './routes/17promise_rendern_exotisch/index'
import { Route as R15usepromiseconditionalIndexImport } from './routes/15use_promise_conditional/index'
import { Route as R12usepromiseIndexImport } from './routes/12use_promise/index'
import { Route as R10suspenseIndexImport } from './routes/10suspense/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TitleIndexRoute = TitleIndexImport.update({
  path: '/title/',
  getParentRoute: () => rootRoute,
} as any)

const R20usecontextIndexRoute = R20usecontextIndexImport.update({
  path: '/20_use_context/',
  getParentRoute: () => rootRoute,
} as any)

const R17promiserendernexotischIndexRoute =
  R17promiserendernexotischIndexImport.update({
    path: '/17promise_rendern_exotisch/',
    getParentRoute: () => rootRoute,
  } as any)

const R15usepromiseconditionalIndexRoute =
  R15usepromiseconditionalIndexImport.update({
    path: '/15use_promise_conditional/',
    getParentRoute: () => rootRoute,
  } as any)

const R12usepromiseIndexRoute = R12usepromiseIndexImport.update({
  path: '/12use_promise/',
  getParentRoute: () => rootRoute,
} as any)

const R10suspenseIndexRoute = R10suspenseIndexImport.update({
  path: '/10suspense/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/10suspense/': {
      id: '/10suspense/'
      path: '/10suspense'
      fullPath: '/10suspense'
      preLoaderRoute: typeof R10suspenseIndexImport
      parentRoute: typeof rootRoute
    }
    '/12use_promise/': {
      id: '/12use_promise/'
      path: '/12use_promise'
      fullPath: '/12use_promise'
      preLoaderRoute: typeof R12usepromiseIndexImport
      parentRoute: typeof rootRoute
    }
    '/15use_promise_conditional/': {
      id: '/15use_promise_conditional/'
      path: '/15use_promise_conditional'
      fullPath: '/15use_promise_conditional'
      preLoaderRoute: typeof R15usepromiseconditionalIndexImport
      parentRoute: typeof rootRoute
    }
    '/17promise_rendern_exotisch/': {
      id: '/17promise_rendern_exotisch/'
      path: '/17promise_rendern_exotisch'
      fullPath: '/17promise_rendern_exotisch'
      preLoaderRoute: typeof R17promiserendernexotischIndexImport
      parentRoute: typeof rootRoute
    }
    '/20_use_context/': {
      id: '/20_use_context/'
      path: '/20_use_context'
      fullPath: '/20_use_context'
      preLoaderRoute: typeof R20usecontextIndexImport
      parentRoute: typeof rootRoute
    }
    '/title/': {
      id: '/title/'
      path: '/title'
      fullPath: '/title'
      preLoaderRoute: typeof TitleIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/10suspense': typeof R10suspenseIndexRoute
  '/12use_promise': typeof R12usepromiseIndexRoute
  '/15use_promise_conditional': typeof R15usepromiseconditionalIndexRoute
  '/17promise_rendern_exotisch': typeof R17promiserendernexotischIndexRoute
  '/20_use_context': typeof R20usecontextIndexRoute
  '/title': typeof TitleIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/10suspense': typeof R10suspenseIndexRoute
  '/12use_promise': typeof R12usepromiseIndexRoute
  '/15use_promise_conditional': typeof R15usepromiseconditionalIndexRoute
  '/17promise_rendern_exotisch': typeof R17promiserendernexotischIndexRoute
  '/20_use_context': typeof R20usecontextIndexRoute
  '/title': typeof TitleIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/10suspense/': typeof R10suspenseIndexRoute
  '/12use_promise/': typeof R12usepromiseIndexRoute
  '/15use_promise_conditional/': typeof R15usepromiseconditionalIndexRoute
  '/17promise_rendern_exotisch/': typeof R17promiserendernexotischIndexRoute
  '/20_use_context/': typeof R20usecontextIndexRoute
  '/title/': typeof TitleIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/10suspense'
    | '/12use_promise'
    | '/15use_promise_conditional'
    | '/17promise_rendern_exotisch'
    | '/20_use_context'
    | '/title'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/10suspense'
    | '/12use_promise'
    | '/15use_promise_conditional'
    | '/17promise_rendern_exotisch'
    | '/20_use_context'
    | '/title'
  id:
    | '__root__'
    | '/'
    | '/10suspense/'
    | '/12use_promise/'
    | '/15use_promise_conditional/'
    | '/17promise_rendern_exotisch/'
    | '/20_use_context/'
    | '/title/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  R10suspenseIndexRoute: typeof R10suspenseIndexRoute
  R12usepromiseIndexRoute: typeof R12usepromiseIndexRoute
  R15usepromiseconditionalIndexRoute: typeof R15usepromiseconditionalIndexRoute
  R17promiserendernexotischIndexRoute: typeof R17promiserendernexotischIndexRoute
  R20usecontextIndexRoute: typeof R20usecontextIndexRoute
  TitleIndexRoute: typeof TitleIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  R10suspenseIndexRoute: R10suspenseIndexRoute,
  R12usepromiseIndexRoute: R12usepromiseIndexRoute,
  R15usepromiseconditionalIndexRoute: R15usepromiseconditionalIndexRoute,
  R17promiserendernexotischIndexRoute: R17promiserendernexotischIndexRoute,
  R20usecontextIndexRoute: R20usecontextIndexRoute,
  TitleIndexRoute: TitleIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/10suspense/",
        "/12use_promise/",
        "/15use_promise_conditional/",
        "/17promise_rendern_exotisch/",
        "/20_use_context/",
        "/title/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/10suspense/": {
      "filePath": "10suspense/index.tsx"
    },
    "/12use_promise/": {
      "filePath": "12use_promise/index.tsx"
    },
    "/15use_promise_conditional/": {
      "filePath": "15use_promise_conditional/index.tsx"
    },
    "/17promise_rendern_exotisch/": {
      "filePath": "17promise_rendern_exotisch/index.tsx"
    },
    "/20_use_context/": {
      "filePath": "20_use_context/index.tsx"
    },
    "/title/": {
      "filePath": "title/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
