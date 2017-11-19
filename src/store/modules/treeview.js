'use strict'

const state = {
  treeview: [
    {
      id: '0',
      label: 'Model',
      expanded: true,
      icon: null,
      parent: true,
      rid: null,
      children: [
        {
          id: '1',
          label: 'Spain',
          expanded: true,
          icon: null,
          rid: null,
          children: [
            {
              id: '11',
              label: 'Nantes',
              expanded: true,
              icon: 'map-marker',
              rid: '11',
              children: [
                {
                  id: '111',
                  label: 'Amélie Carnot',
                  expanded: false,
                  icon: 'user',
                  rid: '111',
                  children: []
                },
                {
                  id: '112',
                  label: 'Benoit Rivière',
                  expanded: false,
                  icon: 'user',
                  rid: '112',
                  children: []
                },
                {
                  id: '113',
                  label: 'Charlotte Dufour',
                  expanded: false,
                  icon: 'user',
                  rid: '113',
                  children: []
                }
              ]
            },
            {
              id: '12',
              label: 'Paris',
              expanded: true,
              icon: 'map-marker',
              rid: '12',
              children: [
                {
                  id: '121',
                  label: 'André Lassalle',
                  expanded: true,
                  icon: 'user',
                  rid: '121',
                  children: [
                    {
                      id: '1211',
                      label: 'Book One',
                      expanded: false,
                      icon: 'book',
                      rid: '1211',
                      children: []
                    },
                    {
                      id: '1212',
                      label: 'Book Two',
                      expanded: false,
                      icon: 'book',
                      rid: '1212',
                      children: []
                    },
                    {
                      id: '1213',
                      label: 'Book Three',
                      expanded: false,
                      icon: 'book',
                      rid: '1213',
                      children: []
                    }
                  ]
                },
                {
                  id: '122',
                  label: 'Géraldine Kramer',
                  expanded: false,
                  icon: 'battery-three-quarters',
                  rid: '122',
                  children: []
                },
                {
                  id: '123',
                  label: 'Stéphane Delarue',
                  expanded: false,
                  icon: 'user',
                  rid: '123',
                  children: []
                }
              ]
            },
            {
              id: '13',
              label: 'Barcelona',
              expanded: false,
              icon: 'cubes',
              rid: '13',
              children: [
                {
                  id: '131',
                  label: 'Eric Josselin',
                  expanded: false,
                  icon: 'user',
                  rid: "1",
                  children: []
                },
                {
                  id: '132',
                  label: 'Laurence Partel',
                  expanded: false,
                  icon: 'user',
                  rid: '132',
                  children: []
                },
                {
                  id: '133',
                  label: 'Michel Asseline',
                  expanded: false,
                  icon: 'user',
                  rid: '133',
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: '2',
          label: 'Netherlands',
          expanded: true,
          icon: null,
          rid: null,
          children: [
            {
              id: '21',
              label: 'Amsterdam',
              expanded: true,
              icon: 'map-marker',
              rid: '21',
              children: [
                {
                  id: '211',
                  label: 'Adele Munster',
                  expanded: false,
                  icon: 'user',
                  rid: '221',
                  children: []
                },
                {
                  id: '212',
                  label: 'Josh Trijken',
                  expanded: false,
                  icon: 'suitcase',
                  rid: '212',
                  children: []
                },
                {
                  id: '213',
                  label: 'Maureen Martens',
                  expanded: false,
                  icon: 'cube',
                  rid: '213',
                  children: []
                }
              ]
            },
            {
              id: '22',
              label: 'Leiden',
              expanded: false,
              icon: 'genderless',
              rid: '22',
              children: [
                {
                  id: '221',
                  label: 'Alexandra Demaerk',
                  expanded: false,
                  icon: 'user',
                  rid: '221',
                  children: []
                },
                {
                  id: '222',
                  label: 'Peter De Walt',
                  expanded: false,
                  icon: 'user',
                  rid: '222',
                  children: []
                },
                {
                  id: '223',
                  label: 'Stan Walters',
                  expanded: false,
                  icon: 'user',
                  rid: '223',
                  children: []
                }
              ]
            },
            {
              id: '23',
              label: 'Rotterdam',
              expanded: false,
              icon: 'laptop',
              rid: '23',
              children: [
                {
                  id: '231',
                  label: 'Bo Faulkner',
                  expanded: false,
                  icon: 'user',
                  rid: '231',
                  children: []
                },
                {
                  id: '232',
                  label: 'Luke Villers',
                  expanded: false,
                  icon: 'user',
                  rid: '232',
                  children: []
                },
                {
                  id: '233',
                  label: 'Patricia De Wit',
                  expanded: false,
                  icon: 'user',
                  rid: '233',
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: '3',
          label: 'United States',
          expanded: true,
          icon: null,
          rid: null,
          children: [
            {
              id: '31',
              label: 'Boston',
              expanded: false,
              icon: 'flash',
              rid: '31',
              children: [
                {
                  id: '311',
                  label: 'Barbara Tripp',
                  expanded: false,
                  icon: 'user',
                  rid: '311',
                  children: []
                },
                {
                  id: '312',
                  label: 'Karen Mitchell',
                  expanded: false,
                  icon: 'user',
                  rid: '312',
                  children: []
                },
                {
                  id: '313',
                  label: 'Mark Wallace',
                  expanded: false,
                  icon: 'user',
                  rid: '313',
                  children: []
                }
              ]
            },
            {
              id: '32',
              label: 'Nashville',
              expanded: false,
              icon: 'snowflake-o',
              rid: '32',
              children: [
                {
                  id: '321',
                  label: 'Doug Anderson',
                  expanded: false,
                  icon: 'user',
                  rid: '321',
                  children: []
                },
                {
                  id: '322',
                  label: 'Richard O\'Connors',
                  expanded: false,
                  icon: 'user',
                  rid: '322',
                  children: []
                },
                {
                  id: '323',
                  label: 'Theresa White',
                  expanded: false,
                  icon: 'user',
                  rid: '323',
                  children: []
                }
              ]
            },
            {
              id: '33',
              label: 'Rochester',
              expanded: false,
              icon: 'dot-circle-o',
              rid: '33',
              children: [
                {
                  id: '331',
                  label: 'Greg Phillips',
                  expanded: false,
                  icon: 'user',
                  rid: '331',
                  children: []
                },
                {
                  id: '332',
                  label: 'Nora Alliver',
                  expanded: false,
                  icon: 'user',
                  rid: '332',
                  children: []
                },
                {
                  id: '333',
                  label: 'Zoe Williams',
                  expanded: false,
                  icon: 'user',
                  rid: '333',
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

const getters = {
  getTree (state) {
    return state.treeview
  }
}

export default {
  state,
  getters
}
