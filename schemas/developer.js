export default {
    title: 'Developer',
    name: 'developer',
    type: 'document',
    fields: [
        {
            title: 'Developer Information',
            name: 'detail',
            type: 'user'
        }, 
        {
            title: 'Work',
            name: 'work',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'project'}]
                }
            ]
                
            
        }
        
    ],
        // custom preview: https://www.sanity.io/docs/previews-list-views
        preview: {
            select: {
                firstName: 'detail.firstName',
                subtitle: 'detail.email',
                lastName: 'detail.lastName',
                avatar: 'detail.avatar'
            },
            prepare({firstName, subtitle, lastName, avatar}) {
                return {
                    title: `${firstName} ${lastName}`,
                    subtitle,
                    media: avatar
                }
            }
        }
}