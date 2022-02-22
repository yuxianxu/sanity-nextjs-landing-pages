export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6215609573d32436bc179544',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2ni1kvh6',
                  apiId: '74851620-8731-41d6-996e-a8e97059b155'
                },
                {
                  buildHookId: '62156095e917c82ad397037d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vr3ppyxm',
                  apiId: 'f63fb112-99e0-4d9d-819a-2d523044522c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yuxianxu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vr3ppyxm.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
