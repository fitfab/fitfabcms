
export default {
    title: 'Project',
    name: 'project',
    type: 'document',
    fields: [
        {
            title: 'Project Name',
            name: 'name',
            type: 'string',
        },
        {
            // This is how you create a richText data structure
            title: 'Description',
            name: 'description',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            title: 'Technology',
            name: 'technology',
            type: 'technology',
        },
        {
            title: 'Location',
            name: 'location',
            type: 'address',
            description: 'Enter the city and state at least.'
        },

        {
            title: 'Business Contact',
            name: 'client',
            type: 'array', 
            of: [{type: 'user'}]
        },
        {
            title: 'Developer',
            name: 'developer',
            type: 'reference',
            to: {type: 'developer'}
        },

    ]
}