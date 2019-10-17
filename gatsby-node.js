/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 * NOTES: The documentation is geared towards using graphQL and querying a database to return a promise. I'm not using a database on my personal website.
 *
 */

// You can delete this file if you're not using it

// export function createPages({ actions }) { //export createPages
//   const { createPage } = actions; //destructure the creatPage action from the available action so it can be called by iteself, and add or get data
//   // pull in or use whatever data
//   // Some dummy data.  Eventually if we have a database or directory we're pulling data from we'll have to perform some query?
//   const someData = [{
//     title: 'Article1',
//     description: 'An article about 1',
//     author: 'Author One',
//     articleURL: 'https://en.wikipedia.org/wiki/1'
//   }, {
//     title: 'Article2',
//     description: 'An article about 2',
//     author: 'Author Two',
//     articleURL: 'https://en.wikipedia.org/wiki/2'
//   }, {
//     title: 'Article3',
//     description: 'An article about 3',
//     author: 'Author Three',
//     articleURL: 'https://en.wikipedia.org/wiki/3'
//   }];

//   // Loop through the data in gatsby-node.js and provide the path, template, and context (data that will be passed in the props’ pageContext) to createPage for each invocation
//   someData.forEach(data => {
//     createPage({
//       path: `/${data.title}`,
//       component: require.resolve(`./src/templates/data-template.js`),
//       context: {data},
//     })
//   })
// }
