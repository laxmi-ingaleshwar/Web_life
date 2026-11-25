//! Modules--> way to split and organise javascript code into samller, reusable pieces.
//! instead of writing all the code in one large file, we can breakdown into smaller files(modules), 
//! and then import/export functionalities between them.

//! types.
//& 1. COMMON JS
// traditional approach to handle the code.
//~ export=> Module.exports
// we have to use only one module.exports, it will overridden all modules, execute only last module
//~ import=> require

//& 2.ES(ES6) module--> modern approach
//~ Named export
//~ Default export