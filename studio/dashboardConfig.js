export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61953ad0ff7ebf3f971ec01b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-c6yppp7f',
                  apiId: '9eb909fd-e7ca-4449-b4f3-90320a702313'
                },
                {
                  buildHookId: '61953ad00b0d6343c1ef818d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nvbon2d3',
                  apiId: '12523cb7-a841-4452-995d-8c1c3557bbd8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/soyolerdenetse/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nvbon2d3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
