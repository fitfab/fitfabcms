export default {
    title: 'Developer',
    name: 'developer',
    type: 'document',
    fields: [
        {
            title: 'Detail',
            name: 'contact',
            type: 'user'
        }
        
    ],
        // custom preview: https://www.sanity.io/docs/previews-list-views
        preview: {
            select: {
                firstName: 'contact.firstName',
                subtitle: 'contact.email',
                lastName: 'contact.lastName',
            },
            prepare({firstName, subtitle, lastName}) {
                return {
                    title: `${firstName} ${lastName}`,
                    subtitle
                }
            }
        }
}