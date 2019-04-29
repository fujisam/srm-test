import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const menuData = [
            {
                label: 'Painel de Gestão',
                icon: 'fas fa-globe',
                url: '/management-panel'
            },
            {
                label: 'Conta Digital',
                icon: 'fas fa-at',
                url: '/digital-account'
            },
            {
                label: 'Ant. de Recebíveis',
                icon: 'far fa-chart-bar',
                url: '#submenu1',
                submenu: [
                    {
                        label: 'Lorem ipsum',
                        url: '/url-inexistente-1'
                    },
                    {
                        label: 'dolor sit',
                        url: '/url-inexistente-2'
                    },
                    {
                        label: 'amet',
                        url: '/url-inexistente-3'
                    }
                ]
            }
        ]

        const alertData = [
            {
                quantidade: 23,
                decricaoalerta: 'Notas Canceladas'
            },
            {
                quantidade: 13,
                decricaoalerta: 'Notas Canceladas'
            },
            {
                quantidade: 7,
                decricaoalerta: 'Assinaturas Digitais'
            }
        ]

        return { menuData, alertData };
    }
}


