Fetching React from CDN is not a good approach because it will make a network call to unpkg.com


"devDependencies": {
     "parcel": "^2.16.4".  ///// ^ means it will automatically update to newer version whenever available
}

package-lock.json is important to keep track of all version history of packages and keeps exact version is getting used.

NPM - manage node package (but it's fullform is not Node package manager)
NPM - needs to install first to run cmd
NPX - execution command without installing in local machine

# Parcel
- Dev build
- local server
- HMR (Hot Module Reload)
- File watching algorithm - written in c++
- Faster build - by using caching
- Image optimization
- minification
- bundling
- compression
- consistant hashing
- code splitting
- differential bundling - support older browsers
- Diagnostic
- Error handling
- HTTPs
- Tree shaking - remove unused code & variables