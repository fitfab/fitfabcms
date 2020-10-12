export default {
    title: 'Technology',
    name: 'technology',
    description: 'add the technology used in this project',
    type: 'array',
    of:[{type: 'string'}],
    options: {
        layout: 'tags',
        list: [
            {title: 'HTML', value: 'HTML'},
            {title: 'CSS', value: 'CSS'},
            {title: 'JavaScript', value: 'JAVASCRIPT'},
            {title: 'ES6', value: 'ES6'},
            {title: 'Typescript', value: 'TYPESCRIPT'},
            {title: 'React', value: 'REACT'},
            {title: 'GraphQL', value: 'GRAPHQL'},
            {title: 'Nodejs', value: 'NODEJS'},
        ]
    }
}