export default {
    title: 'User',
    name: 'user',
    type: 'object',
    fields: [
        {
            title: 'First Name',
            name: 'firstName',
            type: 'string',
        },
        {
            title: 'Last Name',
            name: 'lastName',
            type: 'string',
        },
        {
            title: 'Email Address',
            name: 'email',
            type: 'email',
        },
        {
            title: 'Phone Number',
            name: 'phone',
            type: 'string',
        },
        {
            title: 'Avatar',
            name: 'avatar',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            }
        }

    ]
}