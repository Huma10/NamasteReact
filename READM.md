1. npx parcel index.html ->
    a. npx : executing the package
    b. parcel goes and build.
2. CDN links is not a good way to include React into your project
3. We should include react as a package by 
    a. npm i react
    b. npm i react-dom
4. Parcel
    a. It creates the Dev build
    b. It creates a local server
    c. It does HMR: Hot Module Replacement
    d. It keeps an eye on the file: File watching algorithm.
    e. faster build beacuse it used cache.
    f. npx parcel build index.html : to create prod build.
